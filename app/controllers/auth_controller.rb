
require 'pry'
class AuthController < ApplicationController
  # skip_before_action :authorized, only: [:create]


  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])

      payload = { user_id: user.id}
      # token = JWT.encode(payload, "flobble")
      token = encode_token(payload)
      # binding.pry
      render json: { user: user, jwt: token }
    end
  end

  def authenticate
    # binding.pry
    authHeader = request.headers["Authorization"]
    token = authHeader.split(" ")[1]
    decoded_token = JWT.decode(token, "flobble", true, { algorithm: 'HS256'})
    user_id = decoded_token[0]['user_id']
    user = User.find(user_id)
    render json: user
  end

  def me
    # authHeader = request.headers["Authorization"]
    # token = authHeader.split(" ")[1]
    # decoded_token = JWT.decode(token, "flobble", true, { algorithm: 'HS256'})
    # user_id = decoded_token[0]['user_id']
    # user = User.find(user_id)
    if @user
      render json: { user: @user, games: @user.games }
      else
        render json: {message: "Need Correct JWT"}
    end
  end




end
