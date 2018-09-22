class GamesController < ApplicationController
require 'pry'
  def index
    @games = Game.all
    # binding.pry
    # @games = @user.games
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

  def show
    @game = Game.find_by(id: params[:id])
    # respond_to do |format|
    #   format.html { render :show }
      render json: @game
    # end
  end

  def destroy
    Game.find(params[:id]).destroy
  end

    # @game = Game.find(params[:id])
    # # if !is_admin? && current_user == @review.user
    # # if @game
    #     @game.destroy
      # end
  # end

  private

  def game_params
    # binding.pry
      params.require(:game).permit(:mode, :max_kills, :final_place, :comments, :date).merge(user_id:1)
   end

end
