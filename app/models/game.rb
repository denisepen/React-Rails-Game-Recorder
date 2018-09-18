class Game < ApplicationRecord
  belongs_to :user

  validates_presence_of :mode, :max_kills
  # validates :comment, length: { in: 20..175 }
end
