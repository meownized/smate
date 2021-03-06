# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy neighbor_edit profile registration_preferences]

  def index
    @users = User.all
  end

  def show
    @flat = @user.flats.last
  end

  def registration_preferences; end

  def new
    @user = User.new
  end

  def edit
    @user_json = UserSerializer.new(@user).to_json
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.js
        format.html { redirect_to @user, notice: 'User was successfully created.' }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    # respond_to :json
    # respond_to :js
    respond_to do |format|
      if @user.update(user_params)
        # format.js
        # format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:status, :name, :surname, :sex, :age, :animals, :smoke, :alcohol, :children, :lgbtq, :job, :persnonal_info, :vk, :facebook, :instagram, :avatar, :email)
  end
end
