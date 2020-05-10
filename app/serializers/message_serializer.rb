# frozen_string_literal: true

class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :written_at, :conversation_id
  has_one :user, serializer: UserSerializer

  def written_at
    object.created_at.strftime('%H:%M:%S %d %B %Y')
  end
end
