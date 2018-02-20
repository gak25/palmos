class HomeController < ApplicationController
  def index
    if current_user
      flash.now[:success] = "Signed in as #{current_user.handle}"
      render :'dashboard/index'
    end
  end
end
