class Api::V1::SensorsController < ApplicationController
  # protect_from_forgery with: :null_session

  def sensor_update
    @sensor = Sensor.find_by(id: sensor_params[:sensor_id])
    @sensor.update(sensor_nickname: sensor_params[:nickname])
    render json: @sensor
  end

  def connection_test
    response = request.body.read
    puts "Connected to a relay node!"
    head :no_content
  end

  def data_store
    response = request.body.read
    response_array = response.split(',')
    response_to_hash = {}
    response_to_hash[:id] = response_array[0]
    response_to_hash[:region_id] = 1
    response_to_hash[:sensor_current_time] = response_array[1]
    response_to_hash[:sensor_date] = response_array[2]
    response_to_hash[:sensor_latitude] = response_array[3] + response_array[4]
    response_to_hash[:sensor_longitude] = response_array[5] + response_array[6]
    response_to_hash[:sensor_altitude_meters] = response_array[7]
    response_to_hash[:sensor_speed] = response_array[8]
    response_to_hash[:sensor_angle] = response_array[9]
    response_to_hash[:sensor_temp_celcius] = response_array[10]
    response_to_hash[:sensor_humidity_percentage] = response_array[11]
    response_to_hash[:sensor_acc_x] = response_array[12]
    response_to_hash[:sensor_acc_y] = response_array[13]
    response_to_hash[:sensor_acc_z] = response_array[14]
    response_to_hash[:sensor_distance] = response_array[15]
    puts response_to_hash
    if Sensor.exists?(response_to_hash[:id])
      Sensor.update(response)
    else
      Sensor.new(response)
      if Sensor.save
        puts "Saved successfully"
      else
        puts "Error saving new sensor"
      end
    end
    head :no_content
    # render json: response_to_hash.to_json, status: :received
  end

  private

  def sensor_params
    params.permit(:sensor_id, :nickname)
  end
end
