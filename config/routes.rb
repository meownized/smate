# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'
  get 'pages/join_conversations'
  devise_for :users, controllers: { registrations: 'registrations' }, constraints: { format: 'html' }
  resources :messages

  resources :flats do
    resources :conversations
    delete 'conversations/:id(.:format)', action: 'conversations#submit_person'

    resources :flat_attachments
    resources :rooms
  end

  resources :users do
  end
  get 'registration_preferences/:id',  action: :registration_preferences, controller: 'users', as: :registration_preferences

  get 'users/profile/:id', to: 'users#profile'
  get 'pages/home', to: 'pages#home'
end
