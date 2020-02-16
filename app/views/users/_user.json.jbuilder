json.extract! user, :id, :status, :name, :surname, :sex, :age, :animals, :smoke, :alcohol, :children, :lgbtq, :job, :persnonal_info, :vk, :facebook, :instagram, :avatar, :created_at, :updated_at
json.url user_url(user, format: :json)
