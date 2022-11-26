class Api::V1::PlantsController < ApiController

  def create
    user = current_user
    plant_entry = nil
    plant = nil
    if Plant.where(api_id: plant_params["id"]).empty?
      plant = Plant.new(api_id: plant_params["id"], name: plant_params["name"], image: plant_params["image"])
      if !plant.save
        render json: { error_status: true, error: plant.errors.full_messages.to_sentence }, status: 400
      end
    else
      plant = Plant.find_by(name: plant_params["name"])
    end

    if plant && PlantEntry.where(user: user, plant: plant).empty?
      plant_entry = PlantEntry.new(plant: plant, user: user)
    else
      render json: { error_status: true, error: "Plant already added" }, status: 400
    end

    if plant_entry
      if plant_entry.save
        render json: { plant: plant }
      else
        render json: { error_status: true, error: plant_entry.errors.full_messages }, status: 400
      end
    end
  end

  def index
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

    render json: { plants: current_plants }
  end

  private
  def plant_params
    params.require(:plantData).permit(:id, :name, :image)
  end
end


