# frozen_string_literal: true

class User < ApplicationRecord
  # include ActiveModel::Serializers::JSON
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :rents
  has_many :flats, through: :rents, dependent: :destroy
  has_many :rooms, through: :rents, dependent: :destroy

  # has_many :conversations, dependent: :destroy
  has_many :messages, dependent: :destroy
  # has_many :message_statuses
  has_and_belongs_to_many :conversations
  # accepts_nested_attributes_for :messages, allow_destroy: true
  # accepts_nested_attributes_for :conversations, allow_destroy: true

  # mount_uploader :avatar, AvatarUploader
  has_one_attached :avatar
end
