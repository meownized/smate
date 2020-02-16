json.extract! message, :id, :body, :user_id, :read, :conversation_id, :created_at, :updated_at
json.url message_url(message, format: :json)
