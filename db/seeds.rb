require 'date'

p "Deleting #{User.count} users"
p "Deleting #{Region.count} regions"
p "Deleting #{Sensor.count} sensors"

User.destroy_all
Region.destroy_all
Sensor.destroy_all

NUM_USERS = rand(5..10)
NUM_SENSORS = rand(30..60)
SENSOR_STATUSES = ["sensor healthy", "sensor warning", "sensor off", "sensor disconnected"]
REGION_STATUSES = ["region healthy", "region warning", "region off", "region disconnected"]

REGIONS = [
  {region_latitude: 42.381511, region_longitude: -71.105099, region_country_code: "US", region_country_name: "United States", region_state_code: "MA", region_state_name: "Massachusetts", region_city: "Somerville", region_zipcode: "02143", region_timezone: "ET", region_status: REGION_STATUSES[rand(0...REGION_STATUSES.length)], region_nickname: "Aeronaut", region_risk_level: rand(50..100)},
  {region_latitude: 40.807916, region_longitude: -73.962386, region_country_code: "US", region_country_name: "United States", region_state_code: "NY", region_state_name: "New York", region_city: "New York", region_zipcode: "10027", region_timezone: "ET", region_status: REGION_STATUSES[rand(0...REGION_STATUSES.length)], region_nickname: "Columbia University", region_risk_level: rand(50..100)},
  {region_latitude: 41.312167, region_longitude: -72.119405, region_country_code: "US", region_country_name: "United States", region_state_code: "CT", region_state_name: "Connecticut", region_city: "Waterford", region_zipcode: "06385", region_timezone: "ET", region_status: REGION_STATUSES[rand(0...REGION_STATUSES.length)], region_nickname: "Waterford State Park", region_risk_level: rand(50..100)},
  {region_latitude: 41.389582, region_longitude: -70.611842, region_country_code: "US", region_country_name: "United States", region_state_code: "MA", region_state_name: "Massachusetts", region_city: "Vineyard Haven", region_zipcode: "02568", region_timezone: "ET", region_status: REGION_STATUSES[rand(0...REGION_STATUSES.length)], region_nickname: "Martha's Vineyard Airport", region_risk_level: rand(50..100)}
]


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

def return_us_locations
  location = Geocoder.search(Faker::Internet.ip_v4_address)
  user_location = {}
  location.each do |l|
    if ((l.country_code == "US") && (!l.data.values.any? &:blank?))
      user_location = l.data
    end
  end
  if user_location.any?
    return user_location
  else
    return_us_locations
  end
end

user_id_list = User.pluck(:id).to_a.shuffle
NUM_USERS.times do
  user_location = return_us_locations
  latitude = user_location["latitude"]
  longitude = user_location["longitude"]

  region = Region.create(
    user_id: user_id_list.pop,
    region_latitude: latitude,
    region_longitude: longitude,
    region_country_code: user_location["country_code"],
    region_country_name: user_location["country_name"],
    region_state_code: user_location["region_code"],
    region_state_name: user_location["region_name"],
    region_city: user_location["city"],
    region_zipcode: user_location["zip_code"],
    region_timezone: user_location["time_zone"],
    region_risk_level: rand(50..100),
    region_status: REGION_STATUSES[rand(0...REGION_STATUSES.length)],
  )

  user_sensor_count = rand(5..50)
  rand_latitude_range = rand((latitude - rand(0.000000000...0.200000000))..(latitude + rand(0.000000000...0.200000000)))
  rand_longitude_range = rand((longitude - rand(0.000000000...0.200000000))..(longitude + rand(0.000000000...0.200000000)))
  user_sensor_count.times do
    Sensor.create(
      region: region,
      sensor_latitude: rand_latitude_range,
      sensor_longitude: rand_longitude_range,
      sensor_acceleration_x_mGal: rand(-5.00...5.00),
      sensor_acceleration_y_mGal: rand(-5.00...5.00),
      sensor_acceleration_z_mGal: rand(-5.00...5.00),
      sensor_water_pressure_kPa: rand(0.00...200.00),
      sensor_altitude_meters: rand(0.00...500.00),
      sensor_status: SENSOR_STATUSES[rand(0...SENSOR_STATUSES.length)],
      sensor_risk_level: rand(0.00...100.00)
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

REGIONS.length.times do |i|
  latitude = REGIONS[i][:region_latitude]
  longitude = REGIONS[i][:region_longitude]

  region = Region.create(
    user_id: palmos.id,
    region_latitude: latitude,
    region_longitude: longitude,
    region_country_code: REGIONS[i][:region_country_code],
    region_country_name: REGIONS[i][:region_country_name],
    region_state_code: REGIONS[i][:region_state_code],
    region_state_name: REGIONS[i][:region_state_name],
    region_city: REGIONS[i][:region_city],
    region_zipcode: REGIONS[i][:region_zipcode],
    region_timezone: REGIONS[i][:region_timezone],
    region_risk_level: REGIONS[i][:region_risk_level],
    region_status: REGIONS[i][:region_status],
    region_nickname: REGIONS[i][:region_nickname]
  )

  rand(10..20).times do
    rand_latitude_range = rand((latitude - rand(0.000000000...0.200000000))..(latitude + rand(0.000000000...0.200000000)))
    rand_longitude_range = rand((longitude - rand(0.000000000...0.200000000))..(longitude + rand(0.000000000...0.200000000)))
    Sensor.create(
      region: region,
      sensor_latitude: rand_latitude_range,
      sensor_longitude: rand_longitude_range,
      sensor_acceleration_x_mGal: rand(-5.00...5.00),
      sensor_acceleration_y_mGal: rand(-5.00...5.00),
      sensor_acceleration_z_mGal: rand(-5.00...5.00),
      sensor_water_pressure_kPa: rand(0.00...200.00),
      sensor_altitude_meters: rand(0.00...500.00),
      sensor_status: SENSOR_STATUSES[rand(0...SENSOR_STATUSES.length)],
      sensor_risk_level: rand(0.00...100.00),
    )
  end
end

p "-------------------"
p "Created #{User.count} users"
p "Created #{User.count} regions"
p "Created #{Sensor.count} sensors"
