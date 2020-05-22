# frozen_string_literal: true

class ConversationsSerializer < ActiveModel::Serializer
  attributes :id, :title

  has_many :users, serializer: UserSerializer
  has_many :messages, serializer: MessagesSerializer
end
