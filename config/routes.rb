Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'
  resources :bank_accounts, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      post 'bank_accounts/new_transaction', to: 'bank_accounts#new_transaction'
    end
  end
end
