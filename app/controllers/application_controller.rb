class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :new_user_params, if: :devise_controller?

  protected

    def new_user_params
      devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :password])
    end
end
