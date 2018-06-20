class WordSerializer < ActiveModel::Serializer
  attributes :id, :letters, :definition, :difficulty
end
