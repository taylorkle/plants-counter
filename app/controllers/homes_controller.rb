class HomesController < ApplicationController
  before_action :authenticate_user!, only: [:athenticate]

  def index
  end

  def athenticate
  end

end
