class HomesController < ApplicationController
  before_action :authenticate_user!, only: [:authenticate]
  before_action :authorize_user, only: [:authorize]

  def index
  end

  def authenticate
  end

  def authorize
  end

  protected

  def authorize_user
    if !user_signed_in? || current_user["id"] != params["id"].to_i
      flash[:notice] = "You do not have access to this page"
      redirect_to root_path
    end
  end

end
