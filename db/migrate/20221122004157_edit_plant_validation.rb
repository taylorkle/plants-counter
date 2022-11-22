class EditPlantValidation < ActiveRecord::Migration[5.2]
  def up
    change_column :plants, :api_id, :integer, unique: true
    change_column :plants, :name, :string, unique: true
  end

  def down
    change_column :plants, :api_id, :integer, unique: false
    change_column :plants, :name, :string, unique: false
  end
end
