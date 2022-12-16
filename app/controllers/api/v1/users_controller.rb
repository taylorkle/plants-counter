require_relative "../../../models/services/herb_counter.rb"
require_relative "../../../models/services/date_filter.rb"

class Api::V1::UsersController < ApiController

  def show
    if !current_user.nil?
      user = User.find(current_user["id"])
      plant_entries = current_user.plant_entries
      current_plants = DateFilter.get_current_plants(plant_entries)
      herb_count = HerbCounter.count(current_plants)
      plant_number = (current_plants.length + herb_count * 0.25).to_f

      render json: { user: {id: user.id, first_name: user.first_name, plant_goal: user.plant_goal, plant_number: plant_number} }
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
      render json: { error: current_user.errors.full_messages.to_sentence },
      status: 400
    end

  end

  private
  def new_goal_params
    params.require(:goal)
  end

end