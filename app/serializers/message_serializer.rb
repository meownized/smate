# frozen_string_literal: true

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :date_sent_at, :time_sent_at, :conversation_id
  has_one :user, serializer: UserSerializer

  def date_sent_at
    object.created_at.strftime('%d %B %Y')
  end

  def time_sent_at
    object.created_at.strftime('%H:%M')
  end
end
