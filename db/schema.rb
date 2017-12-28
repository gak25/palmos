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

ActiveRecord::Schema.define(version: 20171228144640) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "regions", force: :cascade do |t|
    t.bigint "user_id"
    t.string "region_nickname"
    t.string "region_status", default: "healthy", null: false
    t.integer "region_risk_level", default: 50, null: false
    t.string "region_latitude", default: "42.381511", null: false
    t.string "region_longitude", default: "-71.105099", null: false
    t.string "region_country_code", null: false
    t.string "region_country_name", null: false
    t.string "region_state_code", null: false
    t.string "region_state_name", null: false
    t.string "region_city", null: false
    t.string "region_zipcode", null: false
    t.string "region_timezone", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_regions_on_user_id"
  end

  create_table "sensors", force: :cascade do |t|
    t.bigint "region_id"
    t.string "sensor_nickname"
    t.string "sensor_status", default: "healthy", null: false
    t.integer "sensor_risk_level", default: 61, null: false
    t.float "sensor_latitude", default: 42.381511, null: false
    t.float "sensor_longitude", default: -71.105099, null: false
    t.float "sensor_acceleration_x_mGal", default: 1.89, null: false
    t.float "sensor_acceleration_y_mGal", default: 3.45, null: false
    t.float "sensor_acceleration_z_mGal", default: 1.44, null: false
    t.float "sensor_water_pressure_kPa", default: 145.0, null: false
    t.float "sensor_altitude_meters", default: 0.0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["region_id"], name: "index_sensors_on_region_id"
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
