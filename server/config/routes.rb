Rails.application.routes.draw do
    resources :warmup, only: [:index]

    namespace :api do
        resources :users, only: [:create]
        post "/login", to: "users#login"
        get "/user", to: "users#user"
        get "/campaigns", to: "campaigns#show"
        post "/campaigns", to: "campaigns#create"
        get "/prospects", to: "prospects#show"
        post "/prospects", to: "prospects#create"
    end
end
