Rails.application.routes.draw do
  resources :users

  resources :games

  # post '/signup', to: 'users#create'
  post '/auth/login', to: 'auth#create'
  get '/test', to: 'users#test'
    # delete 'games/:id', to: 'games#destroy'
  # end
end
