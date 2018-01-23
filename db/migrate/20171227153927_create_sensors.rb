class CreateSensors < ActiveRecord::Migration[5.1]
  def change
    create_table :sensors do |t|
      t.belongs_to :region
      t.string :sensor_nickname, null: false
      t.string :sensor_status, null: false, default: "healthy"
      t.float :sensor_risk_level, null: false, default: 61.00

      t.float :sensor_latitude, null: false, default: 42.381511
      t.float :sensor_longitude, null: false, default: -71.105099
      t.float :sensor_acceleration_x_mGal, null: false, default: 1.89
      t.float :sensor_acceleration_y_mGal, null: false, default: 3.45
      t.float :sensor_acceleration_z_mGal, null: false, default: 1.44
      t.float :sensor_water_pressure_kPa, null: false, default: 145.00
      t.float :sensor_altitude_meters, null: false, default: 0.00

      t.float :sensor_water_pressure_kPa_history, array: true
      t.float :sensor_risk_level_history, array: true

      t.timestamps null: false
    end
  end
end
