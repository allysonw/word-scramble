Rails.application.routes.draw do
  resources :game_words
  resources :scores
  resources :games
  resources :words
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
