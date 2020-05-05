# frozen_string_literal: true

class CreateMessageStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :message_statuses do |t|
      t.integer :status
      t.references :message, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
