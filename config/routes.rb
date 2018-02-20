Rails.application.routes.draw do
  root "home#index"

  get "account", to: "users#edit", as: :edit_user
  get "sign-in", to: "sessions#new", as: :sign_in
  get "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  post "contact", to: "mailer#contact"

  namespace :api do
    namespace :v1 do
      get "me", to: "users#show"
      resources :password_resets, only: [:create, :update]
      resources :sessions, only: [:create]
      resources :users, only: [:create, :update] do
        collection do
          resources :current, only: :index
          resources :sensors, only: [:connection_test, :update, :show, :index, :data_store]
        end
      end

      post "data_store", to: "sensors#data_store"
      post "connection_test", to: "sensors#connection_test"

      # to be deleted ------
      get "users/:handle/regions", to: "users#regions"
      post "users/:handle/regions/:id", to: "regions#region_update"
      post "users/:handle/sensors/:sensor_id", to: "sensors#sensor_update"
      post "users/create", to: "users#create"
      get "users/sensors", to: "users#sensors"
      # ---------------------
    end
  end

  get '*path', to: 'home#index'

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:edit, :new]

  use_doorkeeper

end
