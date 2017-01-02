class Game < ApplicationRecord
  attr_accessor :p
  def players
    self.p = []
  end
end
