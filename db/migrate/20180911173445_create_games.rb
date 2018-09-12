class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :mode
      t.integer :max_kills
      t.integer :final_place
      t.datetime :date
      t.text :comments

      t.timestamps
    end
  end
end
