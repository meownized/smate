# frozen_string_literal: true

class PagesController < ApplicationController
  layout :resolve_layout

  def home; end

  def join_conversations
    @conversations = Conversation.all.where(user_id: current_user.id)
    @conversations_json = ActiveModel::ArraySerializer.new(@conversations, serializer: ConversationSerializer).as_json
    @flats = @conversations.map(&:flat)

    @join_conversations = {
      active_conversation: @conversations&.last&.id,
      join_conversations: @conversations_json,
      flats: flat_serialize
    }
  end

  def flat_serialize
    @flats.map do |flat|
      {
        id: flat.id,
        name: flat.name,
        price: flat.price,
        description: flat.description
      }
    end
  end

  def resolve_layout
    case action_name
    when 'home'
      'home_layout'
    when 'join_conversations'
      'conversation_layout'
    else
      'application'
    end
  end
end
