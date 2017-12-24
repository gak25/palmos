class PagesController < ApplicationController
  def index
    if current_user
      render :'pages/index'
    else
      redirect_to '/sign-in'
    end
  end
end
