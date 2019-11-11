import React from "react"
// import ReactDom from "react-dom"

export class MovieService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		this.getGenres().then((response) => {
			let array= response.genres
			let data = [];
			for (let i=0; i<array.length ; i++) {
				data.push(array[i]);
				this.setState({ data });
			}
			console.log(this.state.data)
		});
	}

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

	render() {
		let itemList = this.state.data.map((movie,i) => {
			return <li key={i}>{movie.name}</li>;
		});
		return (
			<ul>
				{itemList}
			</ul>
		)
	}
}


