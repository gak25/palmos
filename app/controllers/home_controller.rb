class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    puts "IN HOME CONTROLLER-------------------------------------------------------"
    if current_user
      flash.now[:success] = "Signed in as #{current_user.handle}"
      render :'dashboard/index'
    end
  end

  def contact
    @name = params["name"]
    @location = params["location"]
    @from_email = params["from_email"]
    @phone = params["phone"]
    @comments = params["comments"]

    UserMailer.contact(@name, @from_email).deliver_now
    UserMailer.palmos_summary(@name, @from_email, @location, @phone, @comments).deliver_now

    redirect_to root_path
  end
end
