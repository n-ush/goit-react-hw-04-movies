import React, { Component } from "react";
import { fetchMovieCast } from "../services/apiService";
import styles from "./Cast.module.css";
import PropTypes from "prop-types";

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchMovieCast(movieId).then((cast) => {
      this.setState({ cast });
    });
  }

  render() {
    return (
      <>
        <ul className={styles.list}>
          {this.state.cast.map(({ id, profile_path, name, character }) => (
            <li key={id} className={styles.item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={styles.image}
              ></img>
              <p className={styles.name}>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
