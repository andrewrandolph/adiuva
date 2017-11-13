import React from 'react';
import Listing from '../components/Listing';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      placeIds: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.markerClick = this.markerClick.bind(this);
    //this.listPlaces = this.listPlaces.bind(this);
  }

  fetchPlaces(mapProps, map) {
    const {google, initialCenter: { lat, lng }} = mapProps;
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({location: {lat, lng}, radius: 3000}, (results) => results.map(result => service.getDetails({placeId: result.place_id}, (result) => this.setState({placeIds: this.state.placeIds.concat(result)}))));
  }

  markerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    console.log(this.state);
    const style = {
      width: '600px',
      height: '600px'
    };
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

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div>
          <h1>{this.state.selectedPlace.name}</h1>
        </div>
      </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer);
