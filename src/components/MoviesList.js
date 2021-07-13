import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./MoviesList.module.css";
import notFound from "../images/notFound.png";

const imageSrc = "https://image.tmdb.org/t/p/original";

const MoviesList = ({ movies, location }) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ title, id, poster_path, name }) => (
        <li key={id} className={styles.card}>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={styles.image}
              src={poster_path ? `${imageSrc}${poster_path}` : notFound}
              alt={title}
            />
            <h2 className={styles.cardTitle}>{title || name}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MoviesList);
