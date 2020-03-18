class RegistrationsController < Devise::RegistrationsController
  protected
  layout :resolve_layout

  def after_sign_up_path_for(resource)
    edit_user_path(resource)
  end

  def resolve_layout
   case action_name
   when "new"
     "home_layout"
   else
     "application"
   end

end
end
