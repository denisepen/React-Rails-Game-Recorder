class GamesController < ApplicationController
  before_action :current_user
require 'pry'

def create
  @game = Game.new(game_params)
  @game.user_id = @user.id
  if @game.save
    render json: @game
  else
    render json: {errors: {message: "This game failed to save"}}
  end
end

  def index
    if @user
      games = @user.games
    else
     @games = Game.all
  end
    render json: games
  end

  def show
    @game = Game.find_by(id: params[:id])
      render json: @game
  end

  def destroy
    Game.find(params[:id]).destroy
  end


  private

  def game_params
    # binding.pry
      params.require(:game).permit(:mode, :max_kills, :final_place, :comments, :date, :user_id)
      # .merge(user_id:4)
   end

end
