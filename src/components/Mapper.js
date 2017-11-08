import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component {
  render() {
      const style = {
        width: '85%',
        height: '50%'
      };
      return (
        <Map style={style} google={this.props.google} zoom={10}>

          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>

              </div>
          </InfoWindow>
        </Map>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC5hJjUx_SEtJ0yBXIzSJO_a3W0k_xbW6I')
})(MapContainer);
