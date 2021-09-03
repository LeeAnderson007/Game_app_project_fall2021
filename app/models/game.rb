class Game < ApplicationRecord
    validates :name, :category, presence: true
    validates :category, inclusion: { in: ["javascript", "ruby", "react"],
      message: "%{value} is not a valid option" }
end
