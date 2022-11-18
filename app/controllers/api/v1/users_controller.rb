class Api::V1::UsersController < ApplicationController

  def index
      if !current_user.nil?
        render json: { user: {email: current_user.email, id: current_user.id} }
      else
        render json: { error: "User not logged in" }
      end
  end
end