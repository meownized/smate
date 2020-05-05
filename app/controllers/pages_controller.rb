class PagesController < ApplicationController
  layout :resolve_layout

  def home

  end

  def join_conversations
    @conversations = Conversation.all.where(user_id: current_user.id)
  end

  def resolve_layout
   case action_name
   when "home"
     "home_layout"
   else
     "application"
   end
 end
end
