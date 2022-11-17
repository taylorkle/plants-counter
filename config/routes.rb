Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/home', to: 'homes#index'
  get '/plants', to: 'homes#index'
  # post '/plants', to: 'plants#create'

  resources :plants, only: [:create]    #separate out because I don't need to make my own API???

  namespace :api do
    namespace :v1 do
      post '/plants/search', to:'plants#search'
      # resources :plants, only: [:create]
    end
  end

end
