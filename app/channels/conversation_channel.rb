# frozen_string_literal: true

class ConversationChannel < ApplicationCable::Channel
  def subscribed
    conversations = Conversation.find(params[:conversation_id])
    stream_from "conversation_#{params['conversation_id']}_channel"
    # stream_for conversations
  end

  def unsubscribed
    Stop_all_streams
  end

  def send_message(data)
    message = current_user.messages.create(
      body: data['body'],
      conversation_id: data['conversation_id']
    )

    if message.errors.present?
      transmit({ type: 'conversation', data: message.error.full_messages })
    else
      MessageBroadcastJob.perform_later(message.id)
    end
  end
end
