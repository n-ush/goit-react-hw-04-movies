import React, { Component } from "react";
import { fetchReviews } from "../services/apiService";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    fetchReviews(movieId).then((reviews) => {
      this.setState({ reviews });
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.state.reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
