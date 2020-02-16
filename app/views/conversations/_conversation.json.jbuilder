json.extract! conversation, :id, :flat_id, :status, :created_at, :updated_at
json.url conversation_url(conversation, format: :json)
