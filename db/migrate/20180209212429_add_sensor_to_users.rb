class AddSensorToUsers < ActiveRecord::Migration[5.1]
  def change
    add_reference :users, :sensor, foreign_key: true
  end
end
