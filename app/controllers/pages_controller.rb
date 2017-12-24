class PagesController < ApplicationController
  before_action :authenticate_user

  def index

  end

  def authenticate_user
    unless current_user
      redirect_to '/users/sign_up'
    end
  end
end