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

  resources :users


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
