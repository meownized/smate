# frozen_string_literal: true

module FlatsHelper
  def flat_price(object)
    number_with_delimiter(object.price, delimiter: ' ')
  end
end
