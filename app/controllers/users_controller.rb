class UsersController < ApplicationController
  before_action :set_user
  before_action :authenticate_user!


  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_user
    @user = current_user
  end
end
