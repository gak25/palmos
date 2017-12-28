class PagesController < ApplicationController
  def index
    if current_user
      redirect_to root_path
    else
      redirect_to sign_in_path
    end
  end
end
