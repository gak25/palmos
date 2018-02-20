class AddSensorToUsers < ActiveRecord::Migration[5.1]
  def up
    add_reference :users, :sensor, foreign_key: true
  end
  def down
    remove_reference :users, :sensor
  end
end
