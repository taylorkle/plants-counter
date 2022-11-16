class User < ApplicationRecord
  validates :email, :encrypted_password, :username, presence: true, uniqueness: true

  has_many :plant_entries
  has_many :plants, through: :plant_entries
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
