# frozen_string_literal: true

class AddDecisionToUser < ActiveRecord::Migration[5.2]
  def change
    change_table :users do |t|
      t.string :decision, default: [], array: true
    end
  end
end
