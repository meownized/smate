# frozen_string_literal: true

class FlatAttachment < ApplicationRecord
  belongs_to :flat
  belongs_to :room, required: false
  belongs_to :user, required: false # временно

  mount_uploader :image, FlatAttachmentUploader
end
