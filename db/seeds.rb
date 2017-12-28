require 'date'

p "Deleting #{User.count} users"
p "Deleting #{Sensor.count} sensors"

User.destroy_all
Sensor.destroy_all

NUM_USERS = rand(5..10)
NUM_SENSORS = rand(30..60)
STATUSES = ["healthy", "warning", "off", "disconnected"]

NUM_USERS.times do
  first_name = Faker::Name.unique.first_name
  last_name = Faker::Name.unique.last_name
  User.create(
    email: Faker::Internet.unique.email,
    first_name: first_name,
    last_name: last_name,
    confirmed_at: DateTime.now,
    handle: (first_name[0] + last_name).downcase,
    password: Faker::Lorem.unique.characters(10)
  )
end

a = User.pluck(:id).to_a.shuffle
NUM_USERS.times do
  user_sensor_count = rand(5..50)
  general_latitude = rand(-90.000000000...90.000000000)
  general_longitude = rand(-180.000000000...180.000000000)
  user_id = a.pop
  user_sensor_count.times do
    Sensor.create(
      user_id: user_id,
      latitude: rand(general_latitude...(general_latitude + rand(0.100000000...0.700000000))),
      longitude: rand(general_longitude...(general_longitude + rand(0.100000000...0.700000000))),
      rotation_x: rand(-180.00..180.00),
      rotation_y: rand(-180.00..180.00),
      rotation_z: rand(-180.00..180.00),
      soil_moisture_density: rand(0.00..100.00),
      status: STATUSES[rand(0...STATUSES.length)]
    )
  end
end

palmos = User.create(
  email: "palmos@palmos.com",
  first_name: "palmps",
  last_name: "palmos",
  confirmed_at: DateTime.now,
  handle: "palmos",
  password: "palmos"
)
20.times do
  latitude = 42.381511
  longitude = -71.105099

  rand_latitude = rand((latitude - rand(0.000000000...0.200000000))..(latitude + rand(0.000000000...0.200000000)))
  rand_longitude = rand((longitude - rand(0.000000000...0.200000000))..(longitude + rand(0.000000000...0.200000000)))
  Sensor.create(
    user_id: palmos.id,
    latitude: rand_latitude,
    longitude: rand_longitude,
    rotation_x: rand(-180.00..180.00),
    rotation_y: rand(-180.00..180.00),
    rotation_z: rand(-180.00..180.00),
    soil_moisture_density: rand(0.00..100.00),
    status: STATUSES[rand(0...STATUSES.length)]
  )
end

p "-------------------"
p "Created #{User.count} total users"
p "Created #{Sensor.count} total sensors"
