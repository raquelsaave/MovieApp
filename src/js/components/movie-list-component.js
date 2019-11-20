import React from "react";

import MovieService from "../services/movie-service"

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.movieService = new MovieService;
        this.state = {
            data: [],
            genreId: 10749
        }

    }

    componentDidMount() {
        this.movieService.getMoviesbyGenre(this.state.genreId)
            .then((response) => {
                console.log(response.results)
                let array = response.results
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
            return <li key={movie.id}>{movie.title}</li>;
        });
        return (
            <div>
                <h2>Movie List by Genre</h2>
                <ul>
                    {itemList}
                </ul>
            </div>

        );
    }

}

export default MovieList;
// ReactDOM.render(<MovieList />, window.document.getElementById("root"))