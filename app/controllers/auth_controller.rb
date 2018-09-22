<<<<<<< HEAD
require 'pry'
class AuthController < ApplicationController
  # skip_before_action :authorized, only: [:create]
=======
class AuthController < ApplicationController
>>>>>>> 62b7b289dbcaeae088f1d37a0099738b55ef7016

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
<<<<<<< HEAD

      payload = { user_id: user.id}
      # token = JWT.encode(payload, "flobble")
      token = encode_token(payload)
      # binding.pry
      render json: { user: user, jwt: token }
    end
  end



=======
      render json: user
    end
  end

>>>>>>> 62b7b289dbcaeae088f1d37a0099738b55ef7016
end
