Rails.application.routes.draw do
  resources :users
  # namespace :api do
    resources :games

    post '/login', to: 'auth#create'
<<<<<<< HEAD
    get '/me', to: 'users#me'
    get '/welcome', to: 'application#welcome'
=======

>>>>>>> 62b7b289dbcaeae088f1d37a0099738b55ef7016
    # delete 'games/:id', to: 'games#destroy'
  # end
end
