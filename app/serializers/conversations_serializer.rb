# frozen_string_literal: true

class ConversationsSerializer < ActiveModel::Serializer
  attributes :id, :title, :flat_name, :flat_cover

  has_many :users, serializer: UserSerializer
  has_many :messages, serializer: MessagesSerializer

  def flat_name
    Flat.find(object.flat_id).name
  end

  def flat_cover
    return rails_blob_path(object.flat.flat_attachments.first.image, only_path: true)
  end
end
