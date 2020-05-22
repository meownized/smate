# frozen_string_literal: true

class PagesController < ApplicationController
  layout :resolve_layout

  def home; end

  def join_conversations
    @conversations = Conversation.all.where(user_id: current_user.id)
    @conversations_ser = @conversations.map { |conversation| ConversationSerializer.new(conversation) }
    @join_conversations = {
      active_conversation: @conversations.last.id,
      join_conversations: @conversations_ser
    }
  end

  def resolve_layout
    case action_name
    when 'home'
      'home_layout'
    else
      'application'
    end
  end
end
