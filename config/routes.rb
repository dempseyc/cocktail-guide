Rails.application.routes.draw do

  namespace :api do

    get 'drinks/:s', to: 'drinks#show'

    get 'ingredients/:i', to: 'ingredients#show'

  end

end
