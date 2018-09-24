class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :mode, :max_kills, :final_place, :comments, :user_id

  belongs_to :user
end
