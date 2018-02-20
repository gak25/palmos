class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :first_name, :handle, :last_name
end
