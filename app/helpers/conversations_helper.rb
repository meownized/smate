module ConversationsHelper
  def conversation_room(conversation)
    ConversationSerializer.new(conversation).to_json
  end
end
