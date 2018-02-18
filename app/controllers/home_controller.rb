class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
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

    if UserMailer.contact(@name, @from_email).deliver_now
      flash[:success] = "Thanks for the email #{@name}! We will be in touch with you shortly."
    else
      flash[:success] = " Sorry #{@name}, we weren't able to send an email to #{@from_email}. Is the email spelled correctly?"
    end

    # UserMailer.palmos_summary(@name, @from_email, @location, @phone, @comments).deliver_now

    redirect_to '/'
  end
end
