class CreateRegions < ActiveRecord::Migration[5.1]
  def change
    create_table :regions do |t|
      t.belongs_to :user
      t.string :region_nickname, default: "region name"
      t.string :region_status, null: false, default: "healthy"
      t.float :region_risk_level, null: false, default: 50.00

      t.float :region_latitude, null: false, default: 42.381511
      t.float :region_longitude, null: false, default: -71.105099
      t.string :region_country_code, null: false
      t.string :region_country_name, null: false
      t.string :region_state_code, null: false
      t.string :region_state_name, null: false
      t.string :region_city, null: false
      t.string :region_zipcode, null: false
      t.string :region_timezone, null: false

      t.boolean :active, null: false, default: false

      t.timestamps null: false
    end
  end
end
