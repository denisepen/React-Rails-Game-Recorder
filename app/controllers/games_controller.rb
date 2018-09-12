class GamesController < ApplicationController

  def index
    @games = Game.all
    render json: @games
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render json: @game
    else
      render json: {errors: {message: "This game failed to save"}}
    end
  end

  private

  def game_params
      params.require(:game).permit(:mode, :max_kills, :final_place, :comments, :date)
   end

end
