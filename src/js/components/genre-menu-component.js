import React from "react";
import ReactDOM from "react-dom";
import MovieService from "../services/movie-service"

export class GenreMenu extends React.Component {
    constructor(props) {
        super(props);
        this.movieService = new MovieService;
        // this.readService = this.readService.bind(this)
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        //    this.readService()  
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

    // readService() {
    //     // console.log(this.props)
    //     // console.log(this.props.sendFunction())
    // }

    render() {
        let itemList = this.state.data.map((movie) => {
            return <li key={movie.id}>{movie.name}</li>;
        });
        return (
            <div>
                <h2>Movie Genres</h2>
                <ul>
                    {itemList}
                </ul>
                {/* <MovieService /> */}
            </div>

        );
    }

}

ReactDOM.render(<GenreMenu />, window.document.getElementById("root"))