import React from 'react';
import PropTypes from 'prop-types';
import Review from '../Reviews/Review';

class ListItemDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      toggled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      toggled: !this.state.toggled
    });
  }

  render() {
    const {item, item: {reviews, id}} = this.props;
    const phoneNumber = item && item.formatted_address ? `tel:${item.formatted_phone_number}` : '';
    return (
      <li key={id}>
        <h2>{item && item.name}</h2>
        <h3>{item && item.formatted_address}</h3>
        <a className="telephone" href={phoneNumber}>{item && item.formatted_phone_number}</a>
        <br />
        <a href={item && item.website}>{item && item.website}</a>
        <br />
        <br />
        <h4 onClick={() => this.handleClick()} className={!this.state.toggled ? 'show' : 'hide'}>Show Reviews</h4>
        <div id="review" className={this.state.toggled ? 'show' : 'hide'}>
          {reviews ? reviews.map(review => {
            return (
              review ?
              <Review review={review} key={review.time}/>
              :
              <span></span>
            );
          })
          :
          null}
          <h4 onClick={() => this.handleClick()}>Hide Reviews</h4>
        </div>
      </li>
    );
  }
}

ListItemDetail.propTypes = {
  item: PropTypes.object,
  key: PropTypes.number
};

export default ListItemDetail;
