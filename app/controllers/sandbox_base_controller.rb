class SandboxBaseController < ApplicationController
  before_action :authenticate_with_cwds

  protected

  def authenticate_with_cwds

    token = Cwds::Authentication.token_generation(params[:accessCode], ENV.fetch('PERRY_URL'))

    puts "beofre - session token #{session[:token]}"

    if token
      puts "params token #{token}"
      # If passed a new token, delete the one from the session
      new_token = token
      session.delete(:token)
    end

    puts "after - session token #{session[:token]}"
    # If no new token and current token exists, continue as normal
    return if session[:token]

    if Cwds::Authentication.token_validation(new_token, ENV.fetch('PERRY_URL'))
      puts "token validated success #{new_token}"
      session[:token] = new_token

      profile = Cwds::Authentication.store_user_details_from_token(new_token, ENV.fetch('PERRY_URL'))
      session[:profile] = profile

      puts "will redirect to - #{url_for(request.params.except(:token))}"
      # redirect to request URL without token in querystring
      redirect_to url_for(request.params.except(:token))
    else
      redirect_to Cwds::Authentication.authentication_url(ENV.fetch('LOGIN_URL'), request.original_url)
    end
  end

end
