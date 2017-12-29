class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: { index: User.all, current_user: current_user }
  end

  def show
    @user = User.find_by(handle: user_handle[:handle])
    render json: @user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # @user.send_confirmation_email
      sign_in(@user)
      # flash.now[:notice] = "Registration successful."
      render plain: "200"
    else
      flash.now[:alert] = "There was a problem with your registration."
      render plain: "403"
    end
  end

  def sensors
    @sensor_list = User.find_by(handle: user_handle[:handle]).sensors
    render json: @sensor_list
  end

  def regions
    @user_data = []
    regions_list = User.find_by(handle: user_handle[:handle]).regions
    regions_list.each do |region|
      data = {}
      data[:region] = region
      data[:sensors] = region.sensors
      @user_data.push(data)
    end
    # sensor_list = User.find_by(handle: user_handle[:handle]).sensors
    # @user_data.push(sensor_list)

    render json: @user_data
  end


  private

  def user_handle
    params.permit(:handle)
  end

  def user_params
    params.permit(:first_name, :last_name, :handle, :email, :password)
  end

end
