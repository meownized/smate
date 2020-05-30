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
        description: flat.description,
        cover: rails_blob_path(flat.flat_attachments.first.image, only_path: true),
        photos: photos(flat)
      }
    end
  end

  def photos(flat)
    flat.flat_attachments.drop(1).map do |flat_attachment|
      rails_blob_path(flat_attachment.image, only_path: true)
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
