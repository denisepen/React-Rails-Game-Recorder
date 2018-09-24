class UsersController < ApplicationController
  # before_action :current_user, only: [:me]
  # skip_before_action :authorized, only: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def create

      user = User.new(user_params)
      if user.save
        payload = { user_id: user.id}
        # token = JWT.encode(payload, "flobble")
        token = encode_token(payload)
        # binding.pry
        render json: { user: user, jwt: token }

      else
        render json: {errors: {message: "This user failed to save"}}
      end
    end

    def me
      # authHeader = request.headers["Authorization"]
      # token = authHeader.split(" ")[1]
      # decoded_token = JWT.decode(token, "flobble", true, {algorithm: "HS256"})
      # user_id = decoded_token[0]["user_id"]
      # user = User.find(user_id)
      if @user
        render json: { user: @user, games: @user.games}
      else
        render json: { message: "Error GIVE ME A JWT" }
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
        params.permit(:name, :gamer_tag, :email, :password)
     end


end
