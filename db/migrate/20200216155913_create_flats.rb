class CreateFlats < ActiveRecord::Migration[5.2]
  def change
    create_table :flats do |t|
      t.string :name
      t.string :description
      t.string :area
      t.integer :price
      t.string :district
      t.string :subway
      t.boolean :status

      t.timestamps
    end
  end
end
