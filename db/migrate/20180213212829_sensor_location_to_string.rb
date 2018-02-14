class SensorLocationToString < ActiveRecord::Migration[5.1]
  def up
    change_column :sensors, :sensor_longitude, :string
    change_column :sensors, :sensor_latitude, :string
  end
  def down
    change_column :sensors, :sensor_longitude, :float
    change_column :sensors, :sensor_latitude, :float
  end
end
