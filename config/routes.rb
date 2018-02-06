Rails.application.routes.draw do

  root 'main#index'
  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    devise_scope :user do
      get '/sign_in', to: "devise/sessions#new", as: :sign_in
      get '/sign_up', to: "devise/registrations#new", as: :sign_up
      delete '/sign_out', to: 'devise/sessions#destroy', as: :sign_out
    end
    get '/:locale', to: 'main#index'
    get 'about', to: 'main#about'
    get 'for-employers', to: 'main#employers', as: :employers
    get 'for-univs', to: 'main#univs', as: :univs
    get 'ico', to: 'main#ico', as: :ico
    get 'faq', to: 'main#faq', as: :faq
    devise_for :users
    get 'dashboard', to: 'users#show', as: :my_acc
  end

end
