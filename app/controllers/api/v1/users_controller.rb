class Api::V1::UsersController < ApiController

  def show
    if User.find(params[:id])
      user = User.find(params[:id])
      plants = user.plants
      current_date = Date.today
      week_start = current_date.at_beginning_of_week(:sunday)
      week_end = current_date.at_end_of_week(:sunday)

      current_plants = []
      plants.each do |plant|
        if plant["created_at"] > week_start && plant["created_at"] < week_end
          current_plants << plant
        end
      end

      plant_number = current_plants.length
      render json: { user: {id: user.id, first_name: user.first_name, plant_goal: user.plant_goal, plant_number: plant_number} }
    end
  end

  def index
    if !current_user.nil?
      render json: { user: {email: current_user.email, id: current_user.id} }
    else
      render json: { errorStatus: true, error: "User not logged in" }
    end
  end

  def update

    current_user["plant_goal"] = params["goal"].to_i

    render json: { goal: current_user["plant_goal"] }

  end
end