# frozen_string_literal: true

class CreateJoinTableConversationUser < ActiveRecord::Migration[5.2]
  def change
    create_join_table :conversations, :users do |t|
      t.index %i[conversation_id user_id]
      t.index %i[user_id conversation_id]
    end
  end
end
