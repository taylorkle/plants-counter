Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/home', to: 'homes#index'
  get '/plants', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      post '/plants/search', to:'plants#search'
      resources :plants, only: [:index]
    end
  end

end
