class AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])

      payload = { user_id: user.id}
      # token = JWT.encode(payload, "flobble")
      encode_token(payload)
      render json: { user: user, jwt: token }
    end
  end



end
