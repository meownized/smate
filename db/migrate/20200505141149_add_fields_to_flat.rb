# frozen_string_literal: true

class AddFieldsToFlat < ActiveRecord::Migration[5.2]
  def change
    change_table :flats do |t|
      t.string :sex, default: %w[м ж другой], array: true
      t.boolean :couple, default: nil
      t.boolean :smoke, default: nil
      t.boolean :animals, default: nil
      t.boolean :party, default: nil
      t.boolean :children, default: nil
      t.boolean :lgbtq, default: nil
    end
  end
end
