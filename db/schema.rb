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

ActiveRecord::Schema.define(version: 20180209212429) do

  create_table "oauth_access_grants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "resource_owner_id", null: false
    t.bigint "application_id", null: false
    t.string "token", null: false
    t.integer "expires_in", null: false
    t.text "redirect_uri", null: false
    t.datetime "created_at", null: false
    t.datetime "revoked_at"
    t.string "scopes"
    t.index ["application_id"], name: "index_oauth_access_grants_on_application_id"
    t.index ["token"], name: "index_oauth_access_grants_on_token", unique: true
  end

  create_table "oauth_access_tokens", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer "resource_owner_id"
    t.bigint "application_id"
    t.string "token", null: false
    t.string "refresh_token"
    t.integer "expires_in"
    t.datetime "revoked_at"
    t.datetime "created_at", null: false
    t.string "scopes"
    t.string "previous_refresh_token", default: "", null: false
    t.index ["application_id"], name: "index_oauth_access_tokens_on_application_id"
    t.index ["refresh_token"], name: "index_oauth_access_tokens_on_refresh_token", unique: true
    t.index ["resource_owner_id"], name: "index_oauth_access_tokens_on_resource_owner_id"
    t.index ["token"], name: "index_oauth_access_tokens_on_token", unique: true
  end

  create_table "oauth_applications", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string "name", null: false
    t.string "uid", null: false
    t.string "secret", null: false
    t.text "redirect_uri", null: false
    t.string "scopes", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uid"], name: "index_oauth_applications_on_uid", unique: true
  end

  create_table "regions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "user_id"
    t.string "region_nickname", default: "region name"
    t.string "region_status", default: "healthy", null: false
    t.float "region_risk_level", limit: 24, default: 50.0, null: false
    t.float "region_latitude", limit: 24, default: 42.3815, null: false
    t.float "region_longitude", limit: 24, default: -71.1051, null: false
    t.string "region_country_code", null: false
    t.string "region_country_name", null: false
    t.string "region_state_code", null: false
    t.string "region_state_name", null: false
    t.string "region_city", null: false
    t.string "region_zipcode", null: false
    t.string "region_timezone", null: false
    t.boolean "active", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_regions_on_user_id"
  end

  create_table "sensors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.bigint "region_id"
    t.string "sensor_nickname", null: false
    t.string "sensor_status", default: "healthy", null: false
    t.float "sensor_risk_level", limit: 24, default: 61.0, null: false
    t.float "sensor_latitude", limit: 24, default: 42.3815, null: false
    t.float "sensor_longitude", limit: 24, default: -71.1051, null: false
    t.float "sensor_acceleration_x_mGal", limit: 24, default: 1.89, null: false
    t.float "sensor_acceleration_y_mGal", limit: 24, default: 3.45, null: false
    t.float "sensor_acceleration_z_mGal", limit: 24, default: 1.44, null: false
    t.float "sensor_water_pressure_kPa", limit: 24, default: 145.0, null: false
    t.float "sensor_altitude_meters", limit: 24, default: 0.0, null: false
    t.float "sensor_water_pressure_kPa_history", limit: 24
    t.float "sensor_risk_level_history", limit: 24
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "sensor_distance", limit: 24
    t.index ["region_id"], name: "index_sensors_on_region_id"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
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
    t.bigint "sensor_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["handle"], name: "index_users_on_handle", unique: true
    t.index ["sensor_id"], name: "index_users_on_sensor_id"
    t.index ["universally_unique_id"], name: "index_users_on_universally_unique_id", unique: true
  end

  add_foreign_key "oauth_access_grants", "oauth_applications", column: "application_id"
  add_foreign_key "oauth_access_tokens", "oauth_applications", column: "application_id"
  add_foreign_key "users", "sensors"
end
