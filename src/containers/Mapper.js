import React from 'react';
import Listing from '../components/Listing';
import PropTypes from 'prop-types';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeIds: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.markerClick = this.markerClick.bind(this);
  }

  fetchPlaces(mapProps, map) {
    const {google, initialCenter: { lat, lng }} = mapProps;
    const {agencies} = this.props;
    const resultIds = [];
    const service = new google.maps.places.PlacesService(map);
    const promise = new Promise((resolve, reject) => {
      agencies.map(agency => service.nearbySearch({location: {lat, lng}, radius: 16000}, (results) => resolve(results)));
    });
    promise.then(results => {
      results.map(result => resultIds.push(result.place_id));
      console.log(resultIds);
    });
    // agencies.map(agency => service.nearbySearch({location: {lat, lng}, radius: 100000, keyword:agency.title}, (results) => results.map(result => service.getDetails({placeId: result.place_id}, (result) => this.setState({placeIds: this.state.placeIds.concat(result)})))));
  }

  markerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
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
      {this.state.placeIds.map((place, index) => {
        return (
          <Marker
            key={index}
            onClick={this.markerClick}
            title={place && place.name}
            number={place && place.international_phone_number}
            address={place && place.formatted_address}
            name={place && place.name}
            position={{lat: place && place.geometry.location.lat(), lng: place && place.geometry.location.lng()}}
           />
        );
      })}

      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}>
        <div>
          <h4>{this.state.selectedPlace.name}</h4>
          <h4><a href={this.state.selectedPlace.number}>{this.state.selectedPlace.number}</a></h4>
          <h4>{this.state.selectedPlace.address}</h4>
        </div>
      </InfoWindow>
      </Map>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
  agencies: PropTypes.array
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo')
})(MapContainer);
