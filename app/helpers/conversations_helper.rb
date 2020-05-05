# frozen_string_literal: true

module ConversationsHelper
  def conversation_room(conversation)
    ConversationSerializer.new(conversation).to_json
  end
end
