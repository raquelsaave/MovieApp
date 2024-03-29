// import React from "react"
// import ReactDOM from "react-dom"

class MovieService {

	getGenres() {

		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", "https://api.themoviedb.org/3/genre/movie/list?api_key=33e38078c04b3d1e0b3d69f5e283a1f4&language=en-US", true);
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

	getMoviesbyGenre(genreId) {
		return new Promise((resolve, reject) => {
			let request = new XMLHttpRequest();
			request.open("GET", `https://api.themoviedb.org/3/discover/movie?api_key=33e38078c04b3d1e0b3d69f5e283a1f4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&with_original_language=en`, true);
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
}

export default MovieService;


