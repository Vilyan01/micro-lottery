class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :max_players
      t.string :buy_in

      t.timestamps
    end
  end
end
