class Api::V1::ScoresController < ApplicationController
  def index
    # Return all scores to the client
    scores = Score.all.sort do |a,b|
      a.value > b.value ? -1 : 1
    end
    
    render json: scores
  end
end
