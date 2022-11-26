class Api::V1::UsersController < ApiController

  def show
    if User.find(params[:id])
      user = User.find(params[:id])
      plant_entries = current_user.plant_entries
      current_date = Date.today
      week_start = current_date.at_beginning_of_week(:sunday).beginning_of_day
      week_end = current_date.at_end_of_week(:sunday).end_of_day

      current_plants = []
      plant_entries.each do |entry|
        if entry["created_at"] >= week_start && entry["created_at"] <= week_end
          current_plants << entry.plant
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