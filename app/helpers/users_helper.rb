# frozen_string_literal: true

module UsersHelper
  def fullname(user)
    user.name + ' ' + user.surname
  end

  def sex_age(user)
    full_sex(user) + ', ' + user.age.to_s
  end

  def full_sex(user)
    if user.sex == 'м'
      'Мужчина'
    elsif user.sex == 'ж'
      'Девушка'
    end
  end
end
