class CreateSensors < ActiveRecord::Migration[5.1]
  def change
    create_table :sensors do |t|
      t.belongs_to :user
      t.float :latitude, null: false, default: -32.202924
      t.float :longitude, null: false, default: -64.404945
      t.float :rotation_x, null: false, default: 45
      t.float :rotation_y, null: false, default: 90
      t.float :rotation_z, null: false, default: 180
      t.float :soil_moisture_density, null: false, default: 50
      t.string :status, null: false, default: "healthy"
      t.timestamps null: false
    end
  end
end
