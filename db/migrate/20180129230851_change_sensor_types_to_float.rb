class ChangeSensorTypesToFloat < ActiveRecord::Migration[5.1]
  def change
    change_column :sensors, :sensor_speed, :float
    change_column :sensors, :sensor_angle, :float
    change_column :sensors, :sensor_temp_celcius, :float
    change_column :sensors, :sensor_humidity_percentage, :float
    change_column :sensors, :sensor_distance, :float
  end
end
