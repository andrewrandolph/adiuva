import React from 'react';
import { connect } from 'react-redux';
import {Marker} from 'google-maps-react';

class Listing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        This is a list item
      </div>
    );
  }
}

export default Listing;
