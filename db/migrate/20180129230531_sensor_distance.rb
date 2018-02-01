class SensorDistance < ActiveRecord::Migration[5.1]
  def change
    add_column :sensors, :sensor_distance, :float
  end
end
