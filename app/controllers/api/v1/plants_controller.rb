require "faraday"
require "json"

class Api::V1::PlantsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search
    plant_name = params["search_string"]

    api_key = ENV["SPOONACULAR_API_KEY"]

    url = "https://api.spoonacular.com/food/ingredients/search?apiKey=#{api_key}&query=#{plant_name}&number=1"


    api_response = Faraday.get(url)
    parsed_response = JSON.parse(api_response.body)

    parsed_response["results"].first["name"] = parsed_response["results"].first["name"].capitalize

    render json: parsed_response["results"].first

  end

  def index

  end
end


#models folder with plants wrapper     @20min in interacting with a third party api
#initialize with instance variable of @plants = []
#plants_request(query)
#retrieve_plants(query)
#private
  #request function
    #makes Farady request using base URL and query argument
    #returns JSON.parse(response.body)
  #format parsed data and return that so you can assign to an instance variable
#public
  #call on methods to assign instance variable