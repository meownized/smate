class AddOwnerIdToFlat < ActiveRecord::Migration[5.2]
  def change
    add_column :flats, :owner_id, :integer
  end
end
