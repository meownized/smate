class PagesController < ApplicationController
  layout :resolve_layout

  def home

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
