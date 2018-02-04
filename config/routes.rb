Rails.application.routes.draw do
  root 'main#index'

  get 'about', to: 'main#about'
  get 'for-employers', to: 'main#employers', as: :employers
  get 'for-univs', to: 'main#univs', as: :univs
  get 'ico', to: 'main#ico', as: :ico
  get 'faq', to: 'main#faq', as: :faq

end
