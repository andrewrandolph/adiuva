import React from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Map from '../components/Map';

export class Container extends React.Component {
  render() {
    const style = {
      width: "10%",
      height: "20%"
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC5hJjUx_SEtJ0yBXIzSJO_a3W0k_xbW6I'
})(Container);
