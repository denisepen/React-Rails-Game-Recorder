Rails.application.routes.draw do
  resources :users
  # namespace :api do
    resources :games

    # delete 'games/:id', to: 'games#destroy'
  # end
end
