class CreatePlantEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :plant_entries do |t|
      t.belongs_to :user, null: false
      t.belongs_to :plant, null: false
      t.timestamps null: false
    end
  end
end

