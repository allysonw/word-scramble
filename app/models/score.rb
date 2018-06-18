class Score < ApplicationRecord
  belongs_to :game

  def self.top_x_scores(x)
    order(value: :desc).limit(x)
  end
end
