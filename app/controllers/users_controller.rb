class UsersController < ApplicationController
  # skip_before_action :authenticate_request, only: %i[login create]

  # def login
  #   authenticate params[:email], params[:password]
  # end
  #
  # def test
  #   render json: {
  #         message: 'You have passed authentication and authorization test'
  #       }
  # end

  def create
      @user = User.create!(user_params)
      if @user.save
        render json: @user, status: :created
      else
        # render json: @user.errors
        render json: {errors: {message: "This user cannot be created"}}
      end
    end

  def index
    @users = User.all
    render json: @users
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
        params.require(:user).permit(:name, :gamer_tag, :email, :password)
     end

   #   def authenticate(email, password)
   #     command = AuthenticateUser.call(email, password)
   #
   #  if command.success?
   #    render json: {
   #      access_token: command.result,
   #      message: 'Login Successful'
   #    }
   #  else
   #    render json: { error: command.errors }, status: :unauthorized
   #  end
   # end

end
