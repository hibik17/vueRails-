class Api::V1::BooksController < ApplicationController
  def index
    render json: Book.all
  end

  def show
    render :json => Book.find(params[:id]), status: 'sucess'
  end

  def edit
    render :json => Book.find(params[:id]), status: 'sucess'
  end

  def create
    Book.create(title: params[:title], body: params[:body])
    redirect_to '/#/books'
  end
end
