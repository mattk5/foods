class Api::V1::FoodsController < ApplicationController
  def index
    render json: Food.all
  end

  def create
    food = Food.create(food_params)
    render json: food
  end

  def destroy
    Food.destroy(params[:id])
  end

  def update
    food = Food.find(params[:id])
    food.update_attributes(food_params)
    render json: food
  end

  private

  def food_params
    params.require(:food).permit(:id, :name, :description)
  end
end
