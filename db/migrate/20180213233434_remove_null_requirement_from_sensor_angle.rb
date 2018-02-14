class RemoveNullRequirementFromSensorAngle < ActiveRecord::Migration[5.1]
  def up
    change_column :sensors, :sensor_angle, :float, :null => true
  end
  def down
    change_column :sensors, :sensor_angle, :float, :null => false
  end
end
