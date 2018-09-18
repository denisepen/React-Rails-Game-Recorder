class UserSerializer < ActiveModel::Serializer
  attributes  :name, :gamer_tag, :email, :password_digest, :id

  has_many :games
end
