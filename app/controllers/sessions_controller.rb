class SessionsController < ApplicationController
  
  def destroy
    sign_out
    flash[:notice] = "Signed out."
    redirect_to root_url
  end
end
