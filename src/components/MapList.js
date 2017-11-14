import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Marker} from 'google-maps-react';

class MapList extends React.Component {
  constructor(props) {
    super(props);

    this.generateList = this.generateList.bind(this);
  }

  generateList() {
    const {items} = this.props;
    items.map((item, index) => {
      return (
        <li key={index}>
          <h2>{item.name}</h2>
          <h3>{item.formatted_address}</h3>
        </li>
      );
    });
  }

  render() {

    const items = this.props && this.props.items;
    return (
      <ul>
      {items.map((item, index) => {
        return (
          item ?
          <li key={index}>
            <h2>{item && item.name}</h2>
            <h3>{item && item.formatted_address}</h3>
            <a href={item && item.formatted_phone_number}>{item && item.formatted_phone_number}</a>
            <br />
            <a href={item && item.website}>{item && item.website}</a>
          </li>
          :
          <span></span>
        );
      })}
      </ul>
    );
  }
}

MapList.propTypes = {
  items: PropTypes.array
};

export default MapList;
