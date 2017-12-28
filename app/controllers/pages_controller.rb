class PagesController < ApplicationController
  def index
    if !current_user
      redirect_to sign_in_path
    end
  end
end
