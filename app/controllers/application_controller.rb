# require 'pry'


class ApplicationController < ActionController::API
  # before_action :authorized, except: [:welcome]


  def encode_token(payload)
    @token = JWT.encode(payload, "flobble")
  end

  # def auth_header
  #   @token
  #   # binding.pry
  #   # header = request.headers["Authorization"]
  # end

  def decoded_token
    # if auth_header
    if @token
      # token = auth_header.split(" ")[1]
      # begin
        JWT.decode(@token, "flobble", true, { algorith: "HS256"})
      # rescue JWT::DecodeError
        # [{}]
      end
      # decoded_token = JWT.decode(token, "flobble", true, {algorithm: "HS256"})
    end



  # binding.pry
  def current_user
    if decoded_token
       user_id = decoded_token[0]["user_id"]
        @user = User.find(user_id)
      # binding.pry
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    # redirect_to '/welcome' unless logged_in?
    redirect_to '/welcome' unless current_user
  end

  def welcome
    render json: {message: "Please Log In"}
  end
end
