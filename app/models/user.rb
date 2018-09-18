class User < ApplicationRecord
  # has_many :games
  has_secure_password

  validates :name, :email, :password, presence: true
  validates_uniqueness_of :email
    validates :email, format: { with: /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\z/i }
    validates_presence_of :name, :email, :password
    validates :name,  length: { minimum: 5 }
    validates :password,  length: { in: 6..20 }
end
