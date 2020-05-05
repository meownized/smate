class FlatSerializer < ActiveModel::Serializer
  attributes :id
  has_many :users, serializer: UserSerializer
  has_many :conversations, serializer: ConversationsSerializer
end
