class AddFieldsToFlat < ActiveRecord::Migration[5.2]
  def change
    change_table :flats do |t|
      t.string :sex, default: ['м', 'ж', 'другой'], array: true
      t.boolean :couple, default: true
      t.boolean :smoke, default: true
      t.boolean :animals, default: true
      t.boolean :party, default: true
      t.boolean :children, default: true
      t.boolean :lgbtq, default: true
    end
  end
end
