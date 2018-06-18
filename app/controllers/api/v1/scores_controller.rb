class Api::V1::ScoresController < ApplicationController
  def index
    # Return top 10 scores to the client
    scores = Score.top_x_scores(15)

    render json: scores
  end
end
