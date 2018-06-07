require 'pry'

class Api::V1::GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
  end

  def create
    body_hash = dictionary_request

    word = body_hash['word']
    definition = body_hash['results'][0]['definition']

    game = Game.create(complete: false)
    game.words.create(letters: word, difficulty: 0, definition: definition)

    render json: game
  end

  def dictionary_request
    begin
      @resp = Faraday.get 'https://wordsapiv1.p.mashape.com/words?hasDetails=definitions&limit=5&lettersMin=5&lettersMax=10&random=true' do |req|
        req.headers['X-Mashape-Key'] = 'cXvZHDBJCzmshtUAofR5uVwNwswip14MNyEjsn8SyBC8VbDKrY'
        req.headers['Accept'] = 'application/json'
      end

      body_hash = JSON.parse(@resp.body)

      if @resp.success?
        @resp
      else
        @error = 'error!'
      end

    rescue Faraday::ConnectionFailed
        @error = "There was a timeout. Please try again."
    end
  end
end
