import React from "react";
import { render } from "react-dom";

import GenreMenu from "./components/genre-menu-component";
import MovieList from "./components/movie-list-component";

const App = () => {
  return (
    <div>
        <GenreMenu />
        <MovieList />
    </div>
  )

};

render(<App />, document.getElementById("root"));
