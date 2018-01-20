Rails.application.routes.draw do
  root "home#index"

  get "account", to: "users#edit", as: :edit_user
  get "sign-in", to: "sessions#new", as: :sign_in
  get "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  post "contact", to: "home#contact"

  namespace :api do
    namespace :v1 do
      # resources :users, param: :handle, only: [:index, :show]
      resources :password_resets, only: [:create, :update]
      resources :sessions, only: [:create]
      resources :users, param: :handle, only: [:create, :update] do
        collection do
          resources :current, only: :index
        end
      end

      get "users/:handle", to: "users#show"
      get "users/:handle/sensors", to: "users#sensors"
      get "users/:handle/regions", to: "users#regions"
      post "users/:handle/regions/:id", to: "regions#region_update"
      post "users/:handle/sensors/:sensor_id", to: "sensors#sensor_update"
      post "users/create", to: "users#create"
      # post "sessions/create", to: "sessions_api#create"
      get "users/sensors", to: "users#sensors"
    end
  end

  get '*path', to: 'home#index'

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:edit, :new]
  # resources :users, only: [:create, :edit, :update]

  use_doorkeeper

end
