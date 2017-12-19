require "factory_bot"

FactoryBot.define do
  factory :user do
    confirmed_at Time.current
    sequence(:email) { |n| "user#{n}@example.com" }
    sequence(:first_name) { |n| "Thor#{n}" }
    sequence(:handle) { |n| "user#{n}" }
    sequence(:last_name) { |n| "Andre#{n}" }
    sequence(:universally_unique_id) { |n| "Alpha#{n}Numeric" }
    password "password"
    password_confirmation "password"

    trait :unconfirmed do
      confirmed_at nil
    end

    factory :unconfirmed_user, traits: [:unconfirmed]
  end
end
