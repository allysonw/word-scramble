require 'pry'
require 'rapidapisdk'

class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
  end

  def create
    game = dictionary_request
#     game = Game.create(complete: false)
#     game.words.create(letters: "humble", difficulty: 3, definition: "
# having or showing a modest or low estimate of one's own importance.")
# game.words.create(letters: "whale", difficulty: 3, definition: "a very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing.")

    render json: game
  end

  def dictionary_request
    RapidAPI.config(project: ENV['RAPID_API_PROJECT'], token: ENV['RAPID_API_KEY'])

    response = RapidAPI.call('NasaAPI', 'getPictureOfTheDay', {})
    # begin
    #
    #   @resp = Faraday.get 'https://api.github.com/search/repositories' do |req|
    #     req.params['client_id'] = 'Iv1.34574f5684ab3b14'
    #     req.params['client_secret'] = 'cb671516b079fe9a4348e86dd3b4895d0a302b2f'
    #     req.params['q'] = params[:query]
    #   end
    #
    #   body_hash = JSON.parse(@resp.body)
    #
    #   if @resp.success?
    #     @repositories = body_hash['items']
    #   else
    #     @error = 'error!'
    #   end
    #   rescue Faraday::ConnectionFailed
    #   @error = "There was a timeout. Please try again."
    #   end
  end

end
