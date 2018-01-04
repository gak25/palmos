class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index

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
