# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Smate
  class Application < Rails::Application
    config.load_defaults 6.0
    config.hosts << "smate.life"

    config.generators.system_tests = nil
  end
end
