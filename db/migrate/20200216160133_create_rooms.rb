class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :area

      t.timestamps
    end
  end
end
