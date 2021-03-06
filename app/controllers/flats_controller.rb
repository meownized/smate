# frozen_string_literal: true

class FlatsController < ApplicationController
  before_action :set_flat, only: %i[show edit update destroy]

  def index
    @flats = Flat.where('? = ANY (sex)', current_user.sex)
                 .where(couple: [current_user.couple, nil])
                 .where(smoke: [current_user.smoke, nil])
                 .where(animals: [current_user.animals, nil])
                 .where(party: [current_user.party, nil])
                 .where(children: [current_user.children, nil])
                 .where(lgbtq: [current_user.lgbtq, nil])
  end

  def show
    @flat_attachments = @flat.flat_attachments.all
  end

  def new
    @flat = Flat.new
    @flat_attachment = @flat.flat_attachments.build
  end

  def edit; end

  def create
    @flat = Flat.new(flat_params)

    respond_to do |format|
      if @flat.save
        params[:flat_attachments]['image'].each do |image|
          @flat_attachment = @flat.flat_attachments.create!(
            image: image,
            flat_id: @flat.id
          )
        end

        format.html { redirect_to @flat }
        format.json { render :show, status: :created, location: @flat }
      else
        format.html { render :new }
        format.json { render json: @flat.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @flat.update(flat_params)
        params[:flat_attachments]['image'].each do |image|
          @flat_attachment = @flat.flat_attachments.create!(
            image: image,
            flat_id: @flat.id
          )
        end

        format.html { redirect_to @flat }
        format.json { render :show, status: :ok, location: @flat }
      else
        format.html { render :edit }
        format.json { render json: @flat.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @flat.destroy
    respond_to do |format|
      format.html { redirect_to flats_url }
      format.json { head :no_content }
    end
  end

  def destroy_image
    flat_attachment.destroy
  end

  private

  def set_flat
    @flat = Flat.find(params[:id])
  end

  def flat_params
    params.require(:flat).permit(
      :name,
      :description,
      :price,
      :district,
      :subway,
      :status,
      flat_attachments_attributes: %i[
        id flat_id image
      ]
    )
  end
end
