Rails.application.routes.draw do
  resources :users
  # namespace :api do
    resources :games

    post '/login', to: 'auth#create'
    get '/me', to: 'users#me'
    # delete 'games/:id', to: 'games#destroy'
  # end
end
