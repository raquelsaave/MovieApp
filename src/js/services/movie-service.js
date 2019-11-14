// import React from "react"
// import ReactDOM from "react-dom"
// import { GenreMenu } from "../components/genre-menu-component"

class MovieService {
	// constructor() {
	// 	super(props);
	// 	this.getGenres = this.getGenres.bind(this)
	// 	// this.state = {
	// 	// 	data: []
	// 	// }
	// }

	// componentDidMount() {
	// 	this.getGenres().then((response) => {
	// 		let array= response.genres
	// 		let data = [];
	// 		for (let i=0; i<array.length ; i++) {
	// 			data.push(array[i]);
	// 		}
	// 		this.setState({ data });
	// 		console.log(this.state.data)
	// 	});
	// }

	getGenres() {

		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", `https://api.themoviedb.org/3/genre/movie/list?api_key=33e38078c04b3d1e0b3d69f5e283a1f4&language=en-US`, true);
			request.onload = function () {
				resolve(JSON.parse(this.response))
				// console.log(JSON.parse(this.response))
			};
			request.onerror = function () {
				reject(">> There was an error while loading the API...")
			}
			request.send(null);

		})
	}

	// render() {
	// 	// let itemList = this.state.data.map((movie) => {
	// 	// 	return <li key={movie.id}>{movie.name}</li>;
	// 	// });
	// 	return (
	// 		// <ul>
	// 		// 	{itemList}
	// 		// </ul>
	// 	this.getGenres()
	// 	)
	// }
	// render() {
	// 	return(
	// 	<GenreMenu sendFunction = {this.getGenres}/>
	// 	// return null
	// 	)
	// }
}

export default MovieService;
// ReactDOM.render(<MovieService />, window.document.getElementById("root"))

