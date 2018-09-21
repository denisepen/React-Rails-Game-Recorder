class AuthController < ApplicationController
  skip_before_action :autorized, only: {:create}

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])

      payload = { user_id: user.id}
      # token = JWT.encode(payload, "flobble")
      token = encode_token(payload)
      render json: { user: user, jwt: token }
    end
  end



end
