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

ActiveRecord::Schema.define(version: 20171227153927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sensors", force: :cascade do |t|
    t.bigint "user_id"
    t.float "latitude", default: -32.202924, null: false
    t.float "longitude", default: -64.404945, null: false
    t.float "rotation_x", default: 45.0, null: false
    t.float "rotation_y", default: 90.0, null: false
    t.float "rotation_z", default: 180.0, null: false
    t.float "soil_moisture_density", default: 50.0, null: false
    t.string "status", default: "healthy", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_sensors_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.boolean "admin", default: false
    t.string "confirmation_digest"
    t.datetime "confirmed_at"
    t.string "email", null: false
    t.string "first_name", null: false
    t.string "handle", null: false
    t.string "last_name", null: false
    t.string "password_digest"
    t.string "password_reset_digest"
    t.datetime "password_reset_sent_at"
    t.string "remember_digest"
    t.string "universally_unique_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["handle"], name: "index_users_on_handle", unique: true
    t.index ["universally_unique_id"], name: "index_users_on_universally_unique_id", unique: true
  end

end
