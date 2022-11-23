class DeletePlantNumber < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :plant_number, :integer, default: 0
  end
end
