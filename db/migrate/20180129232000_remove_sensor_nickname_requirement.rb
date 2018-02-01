class RemoveSensorNicknameRequirement < ActiveRecord::Migration[5.1]
  def change
    remove_column :sensors, :sensor_nickname, :string
  end
end
