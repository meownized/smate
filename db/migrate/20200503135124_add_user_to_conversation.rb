class AddUserToConversation < ActiveRecord::Migration[5.2]
  def change
    change_table :conversations do |t|
      t.string :title
      t.references :user, foreign_key: true
    end
  end
end
