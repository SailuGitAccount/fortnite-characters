import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

class StarRating extends Component {
  state = {
    selectedStars: this.props.selectedStars,
    totalStars: 6,
  };

  firstMethod = () => {
    const { selectedStars, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      i < selectedStars ? <FontAwesomeIcon key={i} icon={faStar} /> : null
    );
  };

  secondMethod = () => {
    // implement the code for full and half stars here.
    const { selectedStars, totalStars } = this.state;
    return [...Array(totalStars)].map((el, i) =>
      // check if current star should be half
      i < selectedStars && i + 1 > selectedStars ? (
        <FontAwesomeIcon key={i} icon={faStarHalfAlt} />
      ) : // check if current star should be full
      i < selectedStars ? (
        <FontAwesomeIcon key={i} icon={faStar} />
      ) : null
    );
  };

  render() {
    const { selectedStars } = this.state;
    return (
      <React.Fragment>
        {Number.isInteger(selectedStars)
          ? this.firstMethod()
          : this.secondMethod()}
      </React.Fragment>
    );
  }
}

export default StarRating;
