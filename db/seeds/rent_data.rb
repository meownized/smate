# frozen_string_literal: true

require __dir__ + '/user_data.rb'

def create_rents
  Flat.all.each do |flat|
    flat.rooms.each do |room|
      Rent.where(flat_id: flat.id, room_id: room.id).each do |rent|
        user = User.create(basic_info_f)
        time = rand(0..3)
        user.avatar.attach(filename: "#{time+1}.jpg", io: File.open("db/images/avatars/#{time+1}.jpg", content_type: 'image/jpg'))

        6.times do |time|
          image = rand(1..15)
          user.images.attach(filename: "#{image}.jpg", io: File.open("db/images/users_photos/#{image}.jpg", content_type: 'image/jpg'))
        end
        
        rent.update(user_id: user.id)
        flat.conversations.each do |conversation|
          conversation.users << user
        end
      end
    end
  end
end
