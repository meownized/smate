# frozen_string_literal: true

class ConversationsSerializer < ActiveModel::Serializer
  attributes :id, :title, :flat_name

  has_many :users, serializer: UserSerializer
  has_many :messages, serializer: MessagesSerializer

  def flat_name
    Flat.find(object.flat_id).name
  end
end
