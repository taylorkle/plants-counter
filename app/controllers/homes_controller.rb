class HomesController < ApplicationController
  before_action :authenticate_user!, only: [:authenticate]

  def index
  end

  def authenticate
  end

end
