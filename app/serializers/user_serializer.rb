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
             :neighbor_lgbtq

  def full_name
    object.name + ' ' + object.surname
  end
end
