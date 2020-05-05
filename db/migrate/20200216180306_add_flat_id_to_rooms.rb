# frozen_string_literal: true

class AddFlatIdToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :flat_id, :integer
  end
end
