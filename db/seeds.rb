# frozen_string_literal: true

require 'ffaker'

%w[
  user_data
  flat_data
  rent_data
].each do |file|
  require __dir__ + "/seeds/#{file}.rb"
end

create_users
create_flats
create_rents
