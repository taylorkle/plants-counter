require "faraday"
require "json"

class Api::V1::PlantsController < ApplicationController
  def index
    #plant_name = params[:plant_name]
    plant_name = "apple"

    # secret_key = ENV["SUPER_SECRET_KEY"]

    url = "https://api.spoonacular.com/recipes/716429/information?apiKey=2d247834070b4c9fa462c7af74189714"

    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)
    # binding.pry

    status 200
    content_type :json

    json parsed_response

  end
end