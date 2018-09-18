class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
      @user = User.new(user_params)
      if @user.save
        render json: @user
      else
        render json: {errors: {message: "This user failed to save"}}
      end
    end

    def show
      @user = User.find_by(id: params[:id])
        render json: @user
    end

    def destroy
      User.find(params[:id]).destroy
    end

    private

    def user_params
        params.require(:game).permit(:name, :gamer_tag, :email, :password, :password_confirmation)
     end


end
