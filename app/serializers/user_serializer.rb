class UserSerializer < ActiveModel::Serializer
  attributes  :name, :gamer_tag, :email

  has_many :games
end
