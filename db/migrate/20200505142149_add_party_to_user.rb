class AddPartyToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :party, :boolean
  end
end
