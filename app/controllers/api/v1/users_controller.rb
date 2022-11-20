class Api::V1::UsersController < ApiController

  def show
    if User.find(params[:id])
      user = User.find(params[:id])
      render json: { user: {first_name: user.first_name, plant_goal: user.plant_goal, plant_number: user.plant_number} }
    end
  end
end
  def index
      if !current_user.nil?
        render json: { user: {email: current_user.email, id: current_user.id} }
      else
        render json: { error: "User not logged in" }
      end
  end
end