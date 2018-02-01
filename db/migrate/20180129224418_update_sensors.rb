class UpdateSensors < ActiveRecord::Migration[5.1]
  def up
    add_column :sensors, :sensor_date, :string, null: false, :default => Date.today
    add_column :sensors, :sensor_speed, :float, null: false, :default => 0
    add_column :sensors, :sensor_angle, :float, null: false, :default => 0
    add_column :sensors, :sensor_temp_celcius, :float, null: false, :default => 0
    add_column :sensors, :sensor_humidity_percentage, :float, null: false, :default => 0
    rename_column :sensors, :sensor_acceleration_x_mGal, :sensor_acc_x
    rename_column :sensors, :sensor_acceleration_y_mGal, :sensor_acc_y
    rename_column :sensors, :sensor_acceleration_z_mGal, :sensor_acc_z
    rename_column :sensors, :sensor_water_pressure_kPa, :sensor_water_pressure
    rename_column :sensors, :sensor_water_pressure_kPa_history, :sensor_water_pressure_history
  end

  def down
    remove_column, :sensor_date, :sensor_speed, :sensor_angle, :sensor_temp_celcius, :sensor_humidity_percentage
  end
end
