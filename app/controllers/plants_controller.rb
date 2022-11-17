class PlantsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create

    plant_data = params["plantData"]
    user = current_user

    plant = Plant.new(api_id: plant_data["id"], name: plant_data["name"], image: plant_data["image"])

    if plant.save
      plant_entry = PlantEntry.new(plant: plant, user: user)
      if plant_entry.save
        flash.now[:notice] = "Plant added successfully"
        render json: { plant: plant }
      else
        render json: { error: plant_entry.full_messages }
      end
    else
      render json: { error: plant.errors.full_messages }
    end

  end
end