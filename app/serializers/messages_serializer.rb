class MessagesSerializer < ActiveModel::Serializer
  attributes :id, :body, :written_at, :user
  has_one :user, serializer: UserSerializer

  def written_at
    object.created_at.strftime('%H:%M:%S %d %B %Y')
  end
end
