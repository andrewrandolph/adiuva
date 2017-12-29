import React from 'react';
import PropTypes from 'prop-types';

class Review extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const review = this.props && this.props.review;
    return (
      <div>
        <h5>{review ? review.author_name : "No Reviews"}</h5>
        <p>{review && review.text ? review.text : ""}</p>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object
};

export default Review;
