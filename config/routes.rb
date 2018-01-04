Rails.application.routes.draw do
  root "home#index"

  get "sign-in", to: "sessions#new", as: :sign_in
  post "sign-in", to: "sessions#create"
  get "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  post "contact", to: "home#contact"

  namespace :api do
    namespace :v1 do
      resources :users, param: :handle, only: [:index, :show]
      get "users/:handle", to: "users#show"
      get "users/:handle/sensors", to: "users#sensors"
      get "users/:handle/regions", to: "users#regions"
      post "users/:handle/regions/:id", to: "regions#region_update"
      post "users/:handle/sensors/:sensor_id", to: "sensors#sensor_update"
      post "users/create", to: "users#create"
      post "sessions/create", to: "sessions_api#create"
      get "users/sensors", to: "users#sensors"
    end
  end

  get '*path', to: 'home#index'

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:create, :edit, :new, :update]
  resources :users, only: [:create, :edit, :update]
end
