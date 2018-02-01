class TempRemoveRegionReference < ActiveRecord::Migration[5.1]
  def change
    remove_reference :sensors, :region, index: true
  end
end
