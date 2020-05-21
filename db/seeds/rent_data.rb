require File.expand_path(File.dirname(__FILE__))+"/user_data.rb"

def create_rents
  Flat.all.each do |flat|
    flat.rooms.each do |room|
      Rent.where(flat_id: flat.id, room_id: room.id).each do |rent|
        user = User.create(basic_info)
        rent.update(
          user_id: user.id
        )

        flat.conversations.each do |conversation|
          conversation.users << user
        end
      end
    end
  end
end
