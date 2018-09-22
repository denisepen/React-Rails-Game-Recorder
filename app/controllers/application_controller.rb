# require 'pry'


class ApplicationController < ActionController::API
  # before_action :authorized, except: [:welcome]
  # below from 2 hr jsilverstein video
  # include ActionController::HttpAuthentication::Token::ControllerMethods


  def encode_token(payload)
    token = JWT.encode(payload, "flobble")
  end

  def auth_Header
    header = request.headers["Authorization"]
  end

  def decoded_token
    if auth_Header
      token = auth_Header.split(" ")[1]
      begin
        decoded_token = JWT.decode(token, "flobble", true, {algorithm: "HS256"})
      rescue JWT::DecodeError
        [{}]
      end
    end
  end


  def current_user
    if decoded_token
       if user_id = decoded_token[0]["user_id"]
       @user = User.find(user_id)
       # binding.pry
     end
    end
  end

  def logged_in?
    !!current_user
  end

  def authorized
    redirect_to '/welcome' unless logged_in?
    # redirect_to '/welcome' unless current_user
  end

  def welcome
    render json: {message: "Please Log In"}
  end
end
