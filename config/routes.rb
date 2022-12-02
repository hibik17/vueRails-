Rails.application.routes.draw do
  root :to => 'homes#top'
  namespace :api do
    namespace :v1 do
      resources :books
      # resources :users
    end
  end
end
