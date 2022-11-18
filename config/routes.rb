Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/home', to: 'homes#index'
  get '/plants', to: 'homes#athenticate'
  # get 'users/sign_in', to: ''

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
    end
  end

  namespace :api do
    namespace :v1 do
      post '/spoonacular/search', to:'spoonacular#search'
    end
  end

  namespace :api do
    namespace :v1 do
      resources :plants, only: [:create]
    end
  end

end
