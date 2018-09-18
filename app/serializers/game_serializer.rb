class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :mode, :max_kills, :final_place, :comments

  belongs_to :user   
end
