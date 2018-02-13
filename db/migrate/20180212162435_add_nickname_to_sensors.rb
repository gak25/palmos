class AddNicknameToSensors < ActiveRecord::Migration[5.1]
  def change
    add_column :sensors, :sensor_nickname, :string
  end
end
