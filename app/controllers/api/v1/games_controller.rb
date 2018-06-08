class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
  end

  def create
    words_api = WordsApiService.new
    words_array = words_api.getWords

    game = Game.create(complete: false)
    game.words = words_array
    game.create_score(value: 0, player: '')

    render json: game
  end


end
