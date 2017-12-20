import React from 'react';
import PropTypes from 'prop-types';
import ListItemDetail from './ListItemDetail';

class MapList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const items = this.props && this.props.items;
    return (
      <ul>
      {items.map((item, index) => {
        return (
          item ?
          <ListItemDetail item={item} key={index} />
          :
          <span key={index}></span>
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
