# frozen_string_literal: true

class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.boolean :status
      t.integer :flat_id

      t.timestamps
    end
  end
end
