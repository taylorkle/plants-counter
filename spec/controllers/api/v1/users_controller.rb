require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do

  let!(:user) {User.create(first_name: "Mike", email: "Mike@gmail.com", password: "foodie2", plant_goal: 25)}

  let!(:apple) {Plant.create(name: "Apple", api_id: 9003, image: "apple.jpg")}
  let!(:kale) {Plant.create(name: "Kale", api_id: 11233, image: "kale.jpg")}

  let!(:plant_entry_one) {PlantEntry.create(user: user, plant: apple)}
  let!(:plant_entry_two) {PlantEntry.create(user: user, plant: kale)}

  describe "GET#show" do
    it "should return the current user, plant goal, and plant count" do
      sign_in user

      get :show, params: {id: user["id"]}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["user"]["first_name"]).to eq "Mike"
      expect(returned_json["user"]["plant_goal"]).to eq 25
      expect(returned_json["user"]["plant_number"]).to eq 2
    end
  end

  describe "GET#index" do
    it "should return the current user id" do
      sign_in user

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["user"]["id"]).to eq user["id"]
    end
  end

  describe "PATCH#update" do
    it "should return updated plant goal" do
      sign_in user

      patch :update, params: {goal: 28, id: user["id"]}
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["goal"]).to eq 28
    end
  end
end