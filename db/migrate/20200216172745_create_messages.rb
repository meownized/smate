class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body
      t.boolean :read
      t.integer :user_id
      t.integer :conversation_id

      t.timestamps
    end
  end
end
