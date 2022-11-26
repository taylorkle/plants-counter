Rails.application.routes.draw do
  root "homes#index"
  devise_for :users

  get "/home", to: "homes#index"
  get "/users/:id", to:"homes#authorize"
  get '/plants', to: 'homes#authenticate'

  namespace :api do
    namespace :v1 do
      post '/spoonacular/search', to:'spoonacular#search'
      resources :users, only: [:index, :show, :edit]
      resources :plants, only: [:create, :index]
    end
  end
end
