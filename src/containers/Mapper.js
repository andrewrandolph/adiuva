import React from 'react';
import Listing from '../components/Listing';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: []
    }

    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.markerClick = this.markerClick.bind(this);
    //this.listPlaces = this.listPlaces.bind(this);
  }

  // onMarkerClick() {
  //   console.log('click');
  // }

  fetchPlaces(mapProps, map) {
    const {google, initialCenter: { lat, lng }} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({location: {lat, lng}, radius: 3000}, (results) => this.setState({places: results}));
  }

  markerClick(props, marker, e) {
    console.log(props);
    console.log(e);
    console.log(marker);
  }

  // listPlaces() {
  //   this.state.places.map(place => {
  //     return (
  //       <Marker
  //         title={'hello'}
  //         name={place.name}
  //         position={{lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}}
  //        />
  //     );
  //   });
  // }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    };
    console.log(this.props);
    return (
      <Map
        google={this.props.google}
        zoom={12}
        onReady={this.fetchPlaces}
        style={style}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
      >
      {this.state.places.map((place, index) => {
        return (
          <Marker
            key={index}
            onClick={this.markerClick}
            title={place.name}
            name={place.name}
            position={{lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}}
           />
        );
      })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer);
