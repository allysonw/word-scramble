class Api::V1::GamesController < ApplicationController
  def index
    # Return all games to the client
    games = Game.all
    render json: games
  end

  def create
    # Create a new WebService object and request words
    words_api = WordsApiService.new
    words_array = words_api.getWords

    # Create a new game object and add new words and
    # an empty score object to it
    game = Game.create(complete: false)
    game.words = words_array
    game.create_score(value: 0, player: '')

    render json: game
  end

  def update
    # Receive newly completed Game from the client with
    # updated Score information and save both objects to the DB
    puts('*******IN UPDATE******')
    game = Game.find(1);
    render json: game, status: 200
  end

  private
    def game_params
      params.require(:id)
    end

end
