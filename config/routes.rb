Rails.application.routes.draw do
  resources :scores, only: [:index, :update]
  resources :games, only: [:index, :create, :update, :show, ]
end
