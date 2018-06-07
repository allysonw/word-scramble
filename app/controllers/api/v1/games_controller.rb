class Api::V1::GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def create
    game = Game.create(complete: false)
    game.words.create(letters: "humble", difficulty: 3, definition: "
having or showing a modest or low estimate of one's own importance.")
game.words.create(letters: "whale", difficulty: 3, definition: "a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.")

    render json: game
  end

end
