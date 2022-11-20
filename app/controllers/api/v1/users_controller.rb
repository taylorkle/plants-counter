class Api::V1::UsersController < ApiController

  def show
    if User.find(params[:id])
      user = User.find(params[:id])
      render json: { user: {first_name: user.first_name, plant_goal: user.plant_goal, plant_number: user.plant_number} }
    end
  end
end