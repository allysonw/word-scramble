class Score < ApplicationRecord
  belongs_to :game

  def self.top_x_scores(x)
    where('value > ?', 0).order(value: :desc).limit(x)
  end
end
