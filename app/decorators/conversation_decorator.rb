# frozen_string_literal: true

class ConversationDecorator < Draper::Decorator
  delegate_all

  def owner
    object.user.name + ' ' + object.user.surname
  end

  def created_at
    object.created_at.strftime('%d/%m/%Y')
  end
end
