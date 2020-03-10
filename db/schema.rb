# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_10_221509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "conversations", force: :cascade do |t|
    t.boolean "status"
    t.integer "flat_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conversations_users", id: false, force: :cascade do |t|
    t.bigint "conversation_id", null: false
    t.bigint "user_id", null: false
    t.index ["conversation_id", "user_id"], name: "index_conversations_users_on_conversation_id_and_user_id"
    t.index ["user_id", "conversation_id"], name: "index_conversations_users_on_user_id_and_conversation_id"
  end

  create_table "flat_attachments", force: :cascade do |t|
    t.string "image"
    t.bigint "flat_id"
    t.bigint "room_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["flat_id"], name: "index_flat_attachments_on_flat_id"
    t.index ["room_id"], name: "index_flat_attachments_on_room_id"
    t.index ["user_id"], name: "index_flat_attachments_on_user_id"
  end

  create_table "flats", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "area"
    t.integer "price"
    t.string "district"
    t.string "subway"
    t.boolean "status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "message_statuses", force: :cascade do |t|
    t.integer "status"
    t.bigint "message_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_message_statuses_on_message_id"
    t.index ["user_id"], name: "index_message_statuses_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body"
    t.boolean "read"
    t.integer "user_id"
    t.integer "conversation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rents", force: :cascade do |t|
    t.integer "user_id"
    t.integer "flat_id"
    t.integer "room_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "price"
    t.integer "area"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "flat_id"
  end

  create_table "users", force: :cascade do |t|
    t.boolean "status"
    t.string "name"
    t.string "surname"
    t.string "sex"
    t.integer "age"
    t.boolean "animals"
    t.boolean "smoke"
    t.boolean "alcohol"
    t.boolean "children"
    t.boolean "lgbtq"
    t.string "job"
    t.string "persnonal_info"
    t.string "vk"
    t.string "facebook"
    t.string "instagram"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "couple"
  end

  add_foreign_key "flat_attachments", "flats"
  add_foreign_key "flat_attachments", "rooms"
  add_foreign_key "flat_attachments", "users"
  add_foreign_key "message_statuses", "messages"
  add_foreign_key "message_statuses", "users"
end
