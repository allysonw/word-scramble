Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :scores, only: [:index, :update]
      resources :games, only: [:new, :index, :create, :update, :show]
    end
  end
end
