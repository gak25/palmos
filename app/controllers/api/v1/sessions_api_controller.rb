class Api::V1::SessionsApiController < ApplicationController
  before_action :prevent_duplicate_sign_in, only: [:create, :new]
  skip_before_action :verify_authenticity_token

  def create
    puts "------------------------------------------------------------------------------"
    puts "1"
    if params[:sessions_api][:login].match(User::EMAIL_REGEXP)
      puts "2"
      user = User.find_by(email: params[:sessions_api][:login].downcase)
      puts "3"
    else
      puts "4"
      user = User.find_by(handle: params[:sessions_api][:login])
      puts "5"
    end
    if user && user.authenticate(params[:sessions_api][:password])
      puts "6"

      # if user.confirmed?
        flash[:success] = "Signed in as #{user.handle}."
        puts "7"
        sign_in(user)
        puts "8"
        params[:sessions_api][:remember_me] == "1" ? remember(user) : forget(user)
        puts "9"
        # render plain: "200"
        # redirect_to root_path
      # else
      #   flash.now[:alert] = "You need to confirm your email address before continuing."
      #   render :new
      # end
    else
      flash.now[:alert] = "Invalid email/username & password combination."
      redirect_to sign_in_path
      # render plain: "403"
    end
  end
end
