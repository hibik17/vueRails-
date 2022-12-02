Rails.application.routes.draw do
  root :to => 'homes#top'
  namespace :api do
    namespace :v1 do
      resources :books
      resources :users, except: [:new, :create]
    end
  end
end
