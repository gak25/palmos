Rails.application.routes.draw do
  root "pages#index"

  get "sign-in", to: "sessions#new", as: :sign_in
  post "sign-in", to: "sessions#create"
  get "sign-out", to: "sessions#destroy"
  get "sign-up", to: "users#new", as: :sign_up

  namespace :api do
    namespace :v1 do
      resources :users, param: :handle, only: [:index, :show]
      # resources :sessions, param: :handle, only: [:index, :show, :sensors]
      get "users/:handle", to: "users#show"
      get "users/:handle/sensors", to: "users#sensors"
      post "users/create", to: "users#create"
      post "sessions/create", to: "sessions_api#create"
      get "users/sensors", to: "users#sensors"
    end
  end

  get '*path', to: 'pages#index'

  resources :account_confirmations, only: [:edit]
  resources :password_resets, only: [:create, :edit, :new, :update]
  resources :users, only: [:create, :edit, :update]
end
