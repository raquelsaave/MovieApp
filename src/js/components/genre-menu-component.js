import React from "react";
import ReactDOM from "react-dom";
import MovieService from "../services/movie-service"

class GenreMenu extends React.Component {
    constructor(props) {
        super(props);
        this.movieService = new MovieService;
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        this.movieService.getGenres()
            .then((response) => {
                let array = response.genres
                let data = [];
                for (let i = 0; i < array.length; i++) {
                    data.push(array[i]);
                }
                this.setState({ data });
                console.log(this.state.data)
            });
    }

    render() {
        let itemList = this.state.data.map((movie) => {
        return <li key={movie.id}>{movie.id} - {movie.name}</li>;
        });
        return (
            <div>
                <h2>Movie Genres</h2>
                <ul>
                    {itemList}
                </ul>
            </div>

        );
    }

}

export default GenreMenu;
// ReactDOM.render(<GenreMenu />, window.document.getElementById("root"))