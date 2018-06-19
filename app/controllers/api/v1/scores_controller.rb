class Api::V1::ScoresController < ApplicationController
  def index
    # Return top x scores to the client
    scores = Score.top_x_scores(15)

    render json: scores
  end

  def update
    score = Score.find(params[:score][:id])
    score.update(score_params)
  end

  private
    def score_params
      params.require(:score).permit(:id, :player, :value, :created_at)
    end
end
