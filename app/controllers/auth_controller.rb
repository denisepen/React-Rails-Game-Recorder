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



end
