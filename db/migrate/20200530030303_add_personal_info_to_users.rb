class AddPersonalInfoToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :personal_info, :string
  end
end
