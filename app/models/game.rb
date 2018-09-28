class Game < ApplicationRecord
  belongs_to :user

  validates_presence_of :mode
  # validates :comment, length: { in: 20..175 }
end
