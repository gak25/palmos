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

ActiveRecord::Schema.define(version: 20180212162435) do

  create_table "Open_Source_office", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "city", limit: 20
    t.string "status", limit: 20
    t.decimal "feel", precision: 10, scale: 2
    t.decimal "real_temp", precision: 10, scale: 2
    t.decimal "precip_1hr", precision: 10, scale: 2
    t.decimal "precip_today", precision: 10, scale: 2
    t.integer "humidity"
    t.integer "wind_degree"
    t.string "wind_dir", limit: 10
    t.decimal "wind_gust", precision: 10, scale: 2
    t.decimal "wind", precision: 10, scale: 2
    t.decimal "visibility", precision: 10, scale: 2
    t.decimal "pressure", precision: 10, scale: 2
  end

  create_table "UnderGround_History", primary_key: ["date", "city_id"], force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.date "date", null: false
    t.decimal "max_pres", precision: 10, scale: 2
    t.decimal "min_pres", precision: 10, scale: 2
    t.integer "max_dewpt"
    t.integer "mean_dewpt"
    t.integer "min_dewpt"
    t.integer "max_humid"
    t.integer "min_humid"
    t.integer "rain"
    t.decimal "precip", precision: 10, scale: 2
    t.integer "max_temp"
    t.integer "min_temp"
    t.integer "mean_temp"
    t.decimal "max_visi", precision: 10, scale: 2
    t.decimal "min_visi", precision: 10, scale: 2
    t.integer "city_id", default: 0, null: false
  end

  create_table "UnderGround_current", primary_key: "time", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "city", limit: 20
    t.string "status", limit: 20
    t.decimal "feel", precision: 10, scale: 2
    t.decimal "real_temp", precision: 10, scale: 2
    t.decimal "precip_1hr", precision: 10, scale: 2
    t.decimal "precip_today", precision: 10, scale: 2
    t.integer "hunidity"
    t.integer "wind_degree"
    t.string "wind_dir", limit: 10
    t.decimal "wind_gust", precision: 10, scale: 2
    t.decimal "wind", precision: 10, scale: 2
    t.decimal "visibility", precision: 10, scale: 2
    t.decimal "pressure", precision: 10, scale: 2
  end

  create_table "city_list", primary_key: "city_id", id: :integer, default: 0, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "country", limit: 15
    t.string "city", limit: 15
    t.float "longitude", limit: 24
    t.float "latitude", limit: 24
    t.integer "population"
    t.index ["country", "city"], name: "c1", unique: true
  end

  create_table "gps_table", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.integer "mid"
    t.string "sid", limit: 1
    t.decimal "latitude", precision: 10, scale: 4
    t.decimal "longitude", precision: 10, scale: 4
    t.decimal "height", precision: 10, scale: 2
  end

  create_table "landslide_record", primary_key: ["city_id", "date"], force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.integer "city_id", default: 0, null: false
    t.date "date", null: false
    t.string "description", limit: 20
    t.string "cause", limit: 20
  end

  create_table "m1_sA", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.decimal "latitude", precision: 10, scale: 4
    t.decimal "longitude", precision: 10, scale: 4
    t.decimal "height", precision: 10, scale: 2
    t.decimal "temperature", precision: 10, scale: 2
    t.decimal "humidity", precision: 10, scale: 2
    t.decimal "axis_x", precision: 10, scale: 4
    t.decimal "axis_y", precision: 10, scale: 4
    t.decimal "axis_z", precision: 10, scale: 4
    t.decimal "distance", precision: 10, scale: 4
  end

  create_table "m1_sB", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.decimal "latitude", precision: 10, scale: 4
    t.decimal "longitude", precision: 10, scale: 4
    t.decimal "height", precision: 10, scale: 2
    t.decimal "temperature", precision: 10, scale: 2
    t.decimal "humidity", precision: 10, scale: 2
    t.decimal "axis_x", precision: 10, scale: 4
    t.decimal "axis_y", precision: 10, scale: 4
    t.decimal "axis_z", precision: 10, scale: 4
  end

  create_table "m2_sA", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.decimal "latitude", precision: 10, scale: 4
    t.decimal "longitude", precision: 10, scale: 4
    t.decimal "height", precision: 10, scale: 2
    t.decimal "temperature", precision: 10, scale: 2
    t.decimal "humidity", precision: 10, scale: 2
    t.decimal "axis_x", precision: 10, scale: 4
    t.decimal "axis_y", precision: 10, scale: 4
    t.decimal "axis_z", precision: 10, scale: 4
  end

  create_table "m2_sB", primary_key: "datetime", id: :datetime, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.decimal "latitude", precision: 10, scale: 4
    t.decimal "longitude", precision: 10, scale: 4
    t.decimal "height", precision: 10, scale: 2
    t.decimal "temperature", precision: 10, scale: 2
    t.decimal "humidity", precision: 10, scale: 2
    t.decimal "axis_x", precision: 10, scale: 4
    t.decimal "axis_y", precision: 10, scale: 4
    t.decimal "axis_z", precision: 10, scale: 4
  end

  create_table "oauth_access_grants", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
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

  create_table "oauth_access_tokens", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
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

  create_table "oauth_applications", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "name", null: false
    t.string "uid", null: false
    t.string "secret", null: false
    t.text "redirect_uri", null: false
    t.string "scopes", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["uid"], name: "index_oauth_applications_on_uid", unique: true
  end

  create_table "regions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
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

  create_table "sensors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.string "sensor_status", default: "healthy", null: false
    t.float "sensor_risk_level", limit: 24, default: 61.0, null: false
    t.float "sensor_latitude", limit: 24, default: 42.3815, null: false
    t.float "sensor_longitude", limit: 24, default: -71.1051, null: false
    t.float "sensor_acc_x", limit: 24, default: 1.89, null: false
    t.float "sensor_acc_y", limit: 24, default: 3.45, null: false
    t.float "sensor_acc_z", limit: 24, default: 1.44, null: false
    t.float "sensor_water_pressure", limit: 24, default: 145.0, null: false
    t.float "sensor_altitude_meters", limit: 24, default: 0.0, null: false
    t.float "sensor_water_pressure_history", limit: 24
    t.float "sensor_risk_level_history", limit: 24
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "sensor_current_time", default: "2018-01-29 22:57:52.156496", null: false
    t.string "sensor_date", default: "2018-01-29", null: false
    t.float "sensor_speed", limit: 24, default: 0.0, null: false
    t.float "sensor_angle", limit: 24, default: 0.0, null: false
    t.float "sensor_temp_celcius", limit: 24, default: 0.0, null: false
    t.float "sensor_humidity_percentage", limit: 24, default: 0.0, null: false
    t.float "sensor_distance", limit: 24
    t.bigint "user_id"
    t.string "sensor_nickname"
    t.index ["user_id"], name: "index_sensors_on_user_id"
  end

  create_table "test", id: false, force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
    t.integer "A"
    t.integer "b"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=latin1" do |t|
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

  add_foreign_key "landslide_record", "city_list", column: "city_id", primary_key: "city_id", name: "landslide_record_ibfk_1", on_delete: :cascade
  add_foreign_key "oauth_access_grants", "oauth_applications", column: "application_id"
  add_foreign_key "oauth_access_tokens", "oauth_applications", column: "application_id"
  add_foreign_key "sensors", "users"
  add_foreign_key "users", "sensors"
end
