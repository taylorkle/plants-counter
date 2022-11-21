class Api::V1::SpoonacularController < ApiController

  def search
    plant_name = params["search_string"]

    api_key = ENV["SPOONACULAR_API_KEY"]

    url = "https://api.spoonacular.com/food/ingredients/search?apiKey=#{api_key}&query=#{plant_name}&number=1"

    api_response = Faraday.get(url)

    parsed_response = JSON.parse(api_response.body)
    if !parsed_response["results"].empty?
      results = parsed_response["results"].first
      results["name"].capitalize!
      render json: results
    else
      render json: { errorStatus: true, error: "No results matched your search" }, status: 400
    end
  end
end

