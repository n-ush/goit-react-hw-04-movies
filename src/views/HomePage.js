import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "../services/apiService";
import styles from "./HomePage.module.css";
import PropTypes from "prop-types";

const imageSrc = "https://image.tmdb.org/t/p/original";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    fetchTrending().then((movies) => {
      this.setState({ movies });
    });
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <div className={styles.container}>
          <ul className={styles.list}>
            {movies.map(({ id, poster_path, title, name }) => (
              <li key={id} className={styles.card}>
                <Link to={`/movies/${id}`}>
                  <img
                    src={`${imageSrc}${poster_path}`}
                    alt={title}
                    className={styles.image}
                  />
                  <h2 className={styles.cardTitle}>{title || name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default HomePage;
