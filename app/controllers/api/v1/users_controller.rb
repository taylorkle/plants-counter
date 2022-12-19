require_relative "../../../models/services/plant_counter.rb"
require_relative "../../../models/services/date_filter.rb"

class Api::V1::UsersController < ApiController

  def show
    if !current_user.nil?
      user = current_user
      current_plants = DateFilter.get_current_plants(current_user.plant_entries)
      plant_number = PlantCounter.plant_count(current_plants)

      render json: { userData: {user: user, plantTotal: plant_number} }
    else
      render json: { errorStatus: true, error: "User must be logged in" }, status: 400
    end
  end

  def index
    if !current_user.nil?
      render json: { user: {id: current_user.id} }
    else
      render json: { errorStatus: true, error: "User must be logged in" }, status: 400
    end
  end

  def update
    if current_user.update(plant_goal: new_goal_params.to_i)
      render json: { goal: current_user["plant_goal"] }
    else
      render json: { errorStatus: true, error: current_user.errors.full_messages.to_sentence },
      status: 400
    end

  end

  private
  def new_goal_params
    params.require(:goal)
  end

end