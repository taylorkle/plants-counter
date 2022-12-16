require_relative "../../../models/services/date_filter.rb"

class Api::V1::PlantEntriesController < ApiController

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

    last_plant_entry = PlantEntry.where(user: user, plant: plant).order(:created_at).last
    if plant && DateFilter.not_duplicate?(last_plant_entry)
      plant_entry = PlantEntry.new(plant: plant, user: user)
    else
      render json: { error_status: true, error: "Plant already added for current week" }, status: 400
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
    current_plants = DateFilter.get_current_plants(plant_entries)
    render json: { plants: current_plants }
  end

  def destroy
    user = current_user
    plant = params["id"]
    plant_entry = PlantEntry.where(user: user, plant: plant).last
    if plant_entry
      plant_entry.destroy
      render json: {plant: plant}
    else
      render json: {error_status: true, error: "Plant could not be deleted"}, status: 400
    end
  end

  private
  def plant_params
    params.require(:plantData).permit(:id, :name, :image)
  end

end


