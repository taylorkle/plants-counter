class Api::V1::PlantsController < ApiController

  def create
    plant_data = params["plantData"]
    user = current_user
    binding.pry

    plant_entry = nil
    plant = nil
    # errors = nil
    if Plant.where(api_id: plant_data["id"]).empty?
      plant = Plant.new(api_id: plant_data["id"], name: plant_data["name"], image: plant_data["image"])
      if !plant.save
        render json: { error_status: true, error: plant.errors.full_messages.to_sentence }, status: 400
      end
    else
      plant = Plant.find_by(name: plant_data["name"])
    end

    if plant
        plant_entry = PlantEntry.new(plant: plant, user: user)
      else
        render json: { error_status: true, error: plant.errors.full_messages.to_sentence }, status: 400
      end   #works up to here
    end

    if plant_entry
      if plant_entry.save
        render json: { plant: plant }
      else
        render json: { error_status: true, error: plant_entry.errors.full_messages }, status: 400
      end
    end
  end
end
