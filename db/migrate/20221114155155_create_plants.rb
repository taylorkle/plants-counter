class CreatePlants < ActiveRecord::Migration[5.2]
  def change
    create_table :plants do |t|
      t.string :name, null: false
      t.integer :api_id, null: false
      t.string :image
      t.timestamps null: false
    end
  end
end



