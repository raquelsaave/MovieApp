import React from "react";
import ReactDOM from "react-dom";
import { MovieService } from "../services/movie-service"

class GenreMenu extends React.Component {
    constructor() {
        super()

    }
    render() {
        return(
           <div> 
               <h2>Movie Genres</h2>
               <MovieService />
            </div>
           
        );
    }

}

ReactDOM.render(<GenreMenu />, window.document.getElementById("root"))