class RemoveSensorTime < ActiveRecord::Migration[5.1]
  def change
    remove_column :sensors, :sensor_time
  end
end
