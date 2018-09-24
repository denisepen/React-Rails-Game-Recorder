Rails.application.routes.draw do
  resources :users
  # namespace :api do
    resources :games

    post '/login', to: 'auth#create'

    get '/me', to: 'users#me'
    get '/welcome', to: 'application#welcome'
    get '/all_games', to: 'games#all_games'

    # delete 'games/:id', to: 'games#destroy'
  # end
end
