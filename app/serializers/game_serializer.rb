class GameSerializer < ActiveModel::Serializer
  attributes :id, :complete
  has_many :words
  has_one :score
end
