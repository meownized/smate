# frozen_string_literal: true

require __dir__ + '/user_data.rb'

def create_rents
  Flat.all.each do |flat|
    flat.rooms.each do |room|
      Rent.where(flat_id: flat.id, room_id: room.id).each do |rent|
        user = User.create(basic_info)
        time = rand(0..3)
        user.avatar.attach(filename: "#{time}.jpg", io: File.open("db/images/avatars/#{time}.jpg", content_type: "image/jpg"))

        rent.update(user_id: user.id)
        flat.conversations.each do |conversation|
          conversation.users << user
        end
      end
    end
  end
end
