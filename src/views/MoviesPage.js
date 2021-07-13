import React, { Component } from "react";
import { searchMovies } from "../services/apiService";
import Searchbar from "../components/Searchbar";
import MoviesList from "../components/MoviesList";
import PropTypes from "prop-types";

class MoviesPage extends Component {
  state = {
    movies: [],
    error: null,
  };

  onChangeQuery = (query) => {
    this.setState({ error: null });
    searchMovies(query)
      .then((movies) => {
        this.setState({ movies });
      })
      .catch((error) => this.setState({ error }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        <MoviesList movies={this.state.movies} />
      </>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesPage;
