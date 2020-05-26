# frozen_string_literal: true

class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :title, :flat_name, :flat_id

  has_many :messages, serializer: MessagesSerializer
  has_many :users, serializer: UserSerializer

  def flat_name
    Flat.find(object.flat_id).name
  end
end
