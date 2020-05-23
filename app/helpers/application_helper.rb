# frozen_string_literal: true

module ApplicationHelper
  def object_price(object)
    prices = object.items.map {|object| object.price }
    price = prices.inject(0, :+){|sum,x| sum + x }
    number_with_delimiter(price, delimiter: " ")
  end
end
