import React from 'react';
import { connect } from 'react-redux';
import {Marker} from 'google-maps-react';

class Listing extends React.Component {
  componentDidMount() {
    
  }
  render() {
    return (
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 37.778519, lng: -122.405640}} />
    );
  }
}

export default Listing;
