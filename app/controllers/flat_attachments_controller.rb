class FlatAttachmentsController < ApplicationController
  def show
  end

  def destroy
    @flat = Flat.find(params[:id])
    @flat_attachment = FlatAttachment.find(params[:id])
    @flat_attachment.destroy
  end
end
