import React from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';

export class Container extends React.Component {
  render() {
    const style = {
      width: "60%",
      height: "50%"
    };
    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Map style={style} google={this.props.google} initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC5hJjUx_SEtJ0yBXIzSJO_a3W0k_xbW6I'
})(Container);
