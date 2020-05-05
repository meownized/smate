# frozen_string_literal: true

class CreateFlatAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :flat_attachments do |t|
      t.string :image
      t.references :flat, foreign_key: true
      t.references :room, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
