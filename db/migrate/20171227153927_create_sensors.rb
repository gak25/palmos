class CreateSensors < ActiveRecord::Migration[5.1]
  def change
    create_table :sensors do |t|
      t.belongs_to :region
      t.belongs_to :user

      t.string :sensor_nickname, null: false
      t.string :sensor_status, null: false, default: "healthy"

      t.string :sensor_current_time, null: false, default: Time.now
      t.string :sensor_date, null: false, default: DateTime.now.strftime "%d/%m/%Y"

      t.string :sensor_latitude, null: false, default: "42.381511N"
      t.string :sensor_longitude, null: false, default: "-71.105099W"

      t.float :sensor_acc_x, null: false, default: 0.00
      t.float :sensor_acc_y, null: false, default: 0.00
      t.float :sensor_acc_z, null: false, default: 0.00

      t.float :sensor_altitude_meters, null: false, default: 0.00
      t.float :sensor_distance, null: false, default: 0.00
      t.float :sensor_speed, null: false, default: 0.00
      t.float :sensor_angle, null: false, default: 0.00
      t.float :sensor_temp_celcius, null: false, default: 0.00
      t.float :sensor_humidity_percentage, null: false, default: 0.00

      t.float :sensor_water_pressure, null: false, default: 0.00
      t.float :sensor_water_pressure_history, array: true

      t.float :sensor_risk_level, null: false, default: 100.00
      t.float :sensor_risk_level_history, array: true

      t.timestamps null: false
    end
  end
end
