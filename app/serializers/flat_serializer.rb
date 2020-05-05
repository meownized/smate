class FlatSerializer < ActiveModel::Serializer
  attributes :id
  has_many :conversations, serializer: ConversationsSerializer
end
