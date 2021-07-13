import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Cast from "../components/Cast";
import Reviews from "../components/Reviews";
import { fetchMovieDetails } from "../services/apiService";

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    overview: null,
    vote_average: null,
    genres: [],
    id: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieDetails(movieId).then((movies) => {
      this.setState({ ...movies });
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(`/`);
  };

  render() {
    const { match } = this.props;
    const { title, vote_average, overview, genres, poster_path } = this.state;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        ></img>
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.map(({ name }) => (
            <span key={name}>{name}</span>
          ))}
        </p>

        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route exact path={`${match.path}/cast`} component={Cast} />
        <Route exact path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
