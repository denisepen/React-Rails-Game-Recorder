class ApplicationController < ActionController::API

  def encode_token(payload)
    token = JWT.encode(payload, "flobble")
  end
end
