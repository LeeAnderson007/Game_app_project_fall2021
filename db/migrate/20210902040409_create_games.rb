class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :category
      t.string :description
      t.integer :like

      t.timestamps
    end
  end
end
