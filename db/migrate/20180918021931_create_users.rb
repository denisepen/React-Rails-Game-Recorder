class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :gamer_tag
      t.string :email
      t.string :auth_token
      t.string :password_digest

      t.timestamps
    end
  end
end
