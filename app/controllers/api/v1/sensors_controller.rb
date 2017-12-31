class Api::V1::SensorsController < ApplicationController
  protect_from_forgery with: :null_session

  def sensor_update
    @sensor = Sensor.find_by(id: sensor_params[:sensor_id])
    @sensor.update(sensor_nickname: sensor_params[:nickname])
    render json: @sensor
  end

  private

  def sensor_params
    params.permit(:sensor_id, :nickname)
  end
end
