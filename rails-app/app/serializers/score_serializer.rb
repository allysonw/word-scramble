class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :player, :value, :created_at
end
