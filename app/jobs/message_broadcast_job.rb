# frozen_string_literal: true

class MessageBroadcastJob < ApplicationJob
  queue_as :messages

  def perform(message)
    message = Message.find(message)

    if message
      serialized_message = MessageSerializer.new(message).as_json
      ActionCable.server.broadcast("conversation_#{message.conversation.id}_channel", serialized_message[:message])
    else
      puts("message not found with id: #{message_id}")
    end
  end
end
