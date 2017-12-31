class Sensor < ApplicationRecord
  belongs_to :region
  # before_save :create_nickname
  #
  # def create_nickname
  #   if !self.sensor_nickname
  #     update_attributes(sensor_nickname: self.sensor_city)
  #   end
  # end
end
