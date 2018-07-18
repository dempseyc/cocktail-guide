require 'net/http'

class Api::DrinksController < ApplicationController

    def index
        render json: {"message": "invalid"}
    end

    def show
        uri = URI('https://www.thecocktaildb.com/api/json/v1/1/search.php')
        @query = params[:s]
        uri.query = URI.encode_www_form({:s => @query})
        res = Net::HTTP.get_response(uri)
        render json: res.body if res.is_a?(Net::HTTPSuccess)
    end
end
