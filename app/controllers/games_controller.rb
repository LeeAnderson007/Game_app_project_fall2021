class GamesController < ApplicationController
    
    def app
        #render our app with no props, will get the data we need with axios calls
        render component: 'App'
    end

    def index
        
        games = Game.all.order(likes: :desc)
        # @games = Games.order(likes: :desc)

        # don't want to render component here, just return data as JSON
        # render component: "Games", props: { games: @games }

        render json: games
    end

    def create
        game = Game.new(games_params)
        game.likes = 0
        if (game.save)
            render json: game
        else
            render json: {errors: game.errors, look:'Oh No!' }, status: 
            :unprocessable_entity
        end
    end

    def update
        @game = Game.find(params[:id])
        if(@game.update(games_params))
          render json: @game
        else
          # this will cause a 422 error
          render json: {errors: game.errors, look:'Oh No!'}, status: :unprocessable_entity
        end
      end
    
      def like
        @game = Game.find(params[:id])
        @game.likes+= 1
        @game.save
        render json: @game
      end
    
      def destroy
        @game = Game.find(params[:id])
        render json: @game.destroy
      end
    

    private

    def games_params
        params.require(:game).permit(:name, :description, :category)
    end


end
