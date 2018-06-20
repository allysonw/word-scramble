class Api::V1::ScoresController < ApplicationController
  def index
    # Return top x scores to the client
    scores = Score.top_x_scores(15)

    render json: scores
  end

  def update
    # Receive newly updated score from client and
    # update it in the DB
    
    # Parameters: {"score"=>{"id"=>647, "player"=>"allyson1",
    # "value"=>989, "created_at"=>"2018-06-20T20:16:18.966Z"},
    # "id"=>"647"}

    score = Score.find(params[:score][:id])
    score.update(score_params)
  end

  private
    def score_params
      params.require(:score).permit(:id, :player, :value, :created_at)
    end
end
