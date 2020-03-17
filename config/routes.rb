Rails.application.routes.draw do
  root to: 'pages#home'
  devise_for :users, controllers: { registrations: 'registrations' }, constraints: { format: 'html' }

  resources :messages
  resources :conversations
  resources :rooms
  resources :flats do
    resources :flat_attachments
  end

  resources :users


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
