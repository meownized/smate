# frozen_string_literal: true

class AddFieldsToUsers < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.string :neighbor_sex
      t.integer :neighbor_age
      t.boolean :neighbor_children
      t.boolean :neighbor_animals
      t.boolean :neighbor_smoke
      t.boolean :neighbor_alcohol
      t.boolean :neighbor_lgbtq
    end
  end
end
