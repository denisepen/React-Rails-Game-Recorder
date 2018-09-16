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

  def destroy
    @game = Game.find(params[:id])

    # if !is_admin? && current_user == @review.user
    if @game
        @game.destroy
        redirect_to games_path
      else
          flash[:alert] = "This game can't be found"
        end
  #   else
  #     redirect_to reviews_path
  #     flash[:alert] = "You can't delete this review!"
  # end

  end

  private

  def game_params
      params.require(:game).permit(:mode, :max_kills, :final_place, :comments, :date)
   end

end
