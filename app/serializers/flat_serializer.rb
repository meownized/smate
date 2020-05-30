# frozen_string_literal: true

class FlatSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price, :subway, :cover, :photos

  has_many :conversations, serializer: ConversationsSerializer
  def cover
    return rails_blob_path(object.flat_attachments.first.image, only_path: true) if object.flat_attachments.present?
  end

  def photos
    if object.flat_attachments.present?
      object.flat_attachments.drop(1).map do |flat_attachment|
        rails_blob_path(flat_attachment.image, only_path: true)
      end
    else
      []
    end
  end
end
