class Api::V1::SessionsApiController < ApplicationController
  before_action :prevent_duplicate_sign_in, only: [:create, :new]
  skip_before_action :verify_authenticity_token

  def create
    if params[:sessions_api][:login].match(User::EMAIL_REGEXP)
      user = User.find_by(email: params[:sessions_api][:login].downcase)
    else
      user = User.find_by(handle: params[:sessions_api][:login])
    end
    if user && user.authenticate(params[:sessions_api][:password])
      # if user.confirmed?
        flash[:success] = "Signed in as #{user.handle}."
        sign_in(user)
        params[:sessions_api][:remember_me] == "1" ? remember(user) : forget(user)
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
