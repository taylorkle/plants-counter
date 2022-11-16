class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name, null: false
      t.integer :api_id, null: false
      t.string :image
    end
  end
end
