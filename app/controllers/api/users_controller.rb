class Api::V1::UsersController < ApiController

  def show
    render json: { User: User.find(params[:id]) }
    # @user = User.find(params[:id])
  end

end