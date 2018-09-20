class AuthController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      render json: user
    # end
  else
    # render json: @user.errors
    render json: {errors: {message: "Can't find this user"}}
  end
end

end
