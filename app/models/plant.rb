class Plant < ApplicationRecord
  validates :api_id, :name, presence: true, uniqueness: true

  has_many :plant_entries
  has_many :users, through: :plant_entries
end


