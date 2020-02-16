class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.boolean :status
      t.string :name
      t.string :surname
      t.string :sex
      t.integer :age
      t.boolean :animals
      t.boolean :smoke
      t.boolean :alcohol
      t.boolean :children
      t.boolean :lgbtq
      t.string :job
      t.string :persnonal_info
      t.string :vk
      t.string :facebook
      t.string :instagram
      t.string :avatar

      t.timestamps
    end
  end
end
