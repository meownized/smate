class ConversationsController < ApplicationController

  def index
    @conversations = ConversationDecorator.decorate_collection(Conversation.all)
  end

  def show
    @conversation = Conversation.find(params[:id])
    @json_object = ConversationSerializer.new(@conversation).to_json
  end

  def new
    @conversation = Conversation.new
  end

  def create
    @conversation = current_user.conversations.new(conversation_params)

    if @conversation.save
      flash[:success] = 'Conversation sucessfully created.'
      redirect_to conversations_path
    else
      render 'new'
    end
  end

  private

  def conversation_params
    params.require(:conversation).permit(:title)
  end
end
