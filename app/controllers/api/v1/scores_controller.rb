class Api::V1::ScoresController < ApplicationController
  def index
    # Return all scores to the client
    scores = Score.all
    render json: scores
  end
end
