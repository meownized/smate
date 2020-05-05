# frozen_string_literal: true

class AddCoupleToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :couple, :boolean
  end
end
