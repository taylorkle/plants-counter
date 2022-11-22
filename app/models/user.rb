class User < ApplicationRecord
  validates :email, :encrypted_password, :first_name, presence: true
  validates :email, uniqueness: true
  validates :plant_goal, numericality: { greater_than_or_equal_to: 1 }

  has_many :plant_entries
  has_many :plants, through: :plant_entries
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end


