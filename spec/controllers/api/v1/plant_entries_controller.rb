require "rails_helper"

RSpec.describe Api::V1::PlantEntriesController, type: :controller do

  let!(:user) {User.create(first_name: "Mike", email: "Mike@gmail.com", password: "foodie2", plant_goal: 25)}

  let!(:apple) {Plant.create(name: "Apple", api_id: 9003, image: "apple.jpg")}
  let!(:kale) {Plant.create(name: "Kale", api_id: 11233, image: "kale.jpg")}

  let!(:plant_entry_one) {PlantEntry.create(user: user, plant: apple)}
  let!(:plant_entry_two) {PlantEntry.create(user: user, plant: kale)}

  describe "GET#index" do

    it "should return a list of the user's plants" do
      sign_in user
      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["plants"].length).to eq 2
      expect(returned_json["plants"][0]["name"]).to eq "Apple"
      expect(returned_json["plants"][1]["name"]).to eq "Kale"
    end
  end

  describe "POST#create" do

    post_json = {plantData: {name: "Avocado", id: 9037, image: "avocado.jpg"}}

    it "should create a new plant if the plant is not already in the database" do
      prev_count = Plant.count

      post :create, params: post_json

      expect(Plant.count).to eq(prev_count + 1)
    end

    it "should create a new plant entry if there is no plant entry for the current week" do
      sign_in user
      prev_count = user.plant_entries.count

      post :create, params: post_json
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["plant"]["name"]).to eq("Avocado")
      expect(user.plant_entries.count).to eq(prev_count + 1)
    end
  end

  describe "DELETE#destroy" do
    it "should delete the specified plant entry" do
      sign_in user
      prev_count = user.plant_entries.count
      apple_key = apple["id"]

      delete :destroy, params: {id: apple_key}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(user.plant_entries.count).to eq (prev_count -1)
    end
  end
end