import React from 'react';
import PropTypes from 'prop-types';

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
    const {item, key} = this.props;
    // const photos = item.photos;
    // console.log(photos);
    console.log(item);
    return (
      <li key={key}>
        <h2>{item && item.name}</h2>
        <h3>{item && item.formatted_address}</h3>
        <a href={item && item.formatted_phone_number}>{item && item.formatted_phone_number}</a>
        <br />
        <a href={item && item.website}>{item && item.website}</a>
        <br />
        <br />
        <h4 onClick={() => this.handleClick()} className={!this.state.toggled ? 'show' : 'hide'}>Show Reviews</h4>
        <div className={this.state.toggled ? 'show' : 'hide'}>
          <h4>Rating: {item.rating}</h4>
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