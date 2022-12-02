class Api::V1::UsersController < ApplicationController
  def index
  end

  def edit
  end

  def show
    render json: Book.find(params[:id])
  end

  def destroy
  end

  def update
  end
end
