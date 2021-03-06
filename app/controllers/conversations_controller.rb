# frozen_string_literal: true

class ConversationsController < ApplicationController
  before_action :get_outlet
  layout :resolve_layout

  def resolve_layout
    case action_name
    when 'index'
      'conversation_layout'
    else
      'application'
    end
  end

  def index
    @json_object = ConversationSerializer.new(@conversation).to_json
  end

  def show
    @conversation = @flat.conversations.find(params[:id])
  end

  def create
    conversation = @flat.conversations.build(join_conversation)
    conversation.users << @flat.users << User.find(@flat.owner_id)

    if conversation.save
      serialized_data = ConversationSerializer.new(conversation).as_json
      ActionCable.server.broadcast 'conversations_channel',
        serialized_data[:conversation]
      redirect_to pages_join_conversations_path(
        { activeConversation: conversation.id }
      )
    end
  end

  def destroy
    @conversation = @flat.conversations.find(params[:id])

    return @conversation.destroy unless params[:decision]

    user = User.find(@conversation.user_id)
    user.decision << true
    user.save

    return if user.decision.count != @flat.users.count

    Rent.create(
      user_id: @conversation.user_id,
      flat_id: @flat.id,
      room_id: @flat.rooms.sample.id
    )

    @conversation.destroy
    respond_to do |format|
      format.html { redirect_to flat_conversations_path(@flat) }
      format.json { head :no_content }
    end
  end

  private

  def get_outlet
    @flat = Flat.find(params[:flat_id])
  end

  def join_conversation
    {
      flat_id: @flat.id,
      user_id: current_user.id,
      title: (current_user.name + ' ' + current_user.surname).to_s
    }
  end

  def conversation_params
    params.require(:conversation).permit(:title, :flat_id, :user_id)
  end
end
