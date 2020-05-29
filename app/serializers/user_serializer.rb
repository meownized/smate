# frozen_string_literal: true

class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :surname,
             :full_name,
             :email,
             :sex,
             :age,
             :children,
             :animals,
             :smoke,
             :alcohol,
             :lgbtq,
             :neighbor_sex,
             :neighbor_age,
             :neighbor_children,
             :neighbor_animals,
             :neighbor_smoke,
             :neighbor_alcohol,
             :neighbor_lgbtq,
             :avatar

  def full_name
    object.name + ' ' + object.surname
  end

  def avatar
    return rails_blob_path(object.avatar, only_path: true) if object.avatar.present?
    ''
  end
end
