require "rails_helper"

RSpec.describe Api::V1::SpoonacularController, type: :controller do
  describe "POST#search" do

    it "should return one food item for a valid search result" do
      get :search, {params: {search_string: "apple"}}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["id"]).to eq 9003
      expect(returned_json["name"]).to eq "Apple"
      expect(returned_json["image"]).to eq "apple.jpg"
    end

    it "should return an error if there are no search results" do
      get :search, {params: {search_string: "bergieorti"}}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 400
      expect(response.content_type).to eq("application/json")
      expect(returned_json["errorStatus"]).to eq true
    end
  end
end