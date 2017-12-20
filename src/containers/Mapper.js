import React, {Component} from 'react';
import MapList from '../components/MapList/MapList';
import PropTypes from 'prop-types';
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeIds: [],
      searchResults: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    this.fetchPlaces = this.fetchPlaces.bind(this);
    this.markerClick = this.markerClick.bind(this);
    this.determineDistance = this.determineDistance.bind(this);
    this.mapPlaceIds = this.mapPlaceIds.bind(this);
  }

  mapPlaceIds(result, response) {
    this.setState({
      placeIds: this.state.placeIds.concat(result)
    });
  }

  fetchDetails(results, error, service) {
    results.forEach(result => service.getDetails({placeId: result.place_id}, (result, response) => setTimeout(() => this.mapPlaceIds(result, response)), 2500));
  }

  fetchPlaces(mapProps, map) {
    const {google, initialCenter: { lat, lng }} = mapProps;
    const {agencies, distance} = this.props;
    const service = new google.maps.places.PlacesService(map);
    const searchableAgencies = agencies.filter(agency => agency.active === true);

    searchableAgencies.forEach(agency => service.nearbySearch({location: {lat, lng}, radius: distance, keyword:agency.title}, (results, error) => {
      setTimeout(() => this.fetchDetails(results, error, service), 2000);
    }));
    //Added a comment to push branch
    //agencies.map(agency => service.nearbySearch({location: {lat, lng}, radius: distance, keyword:agency.title}, (results) => results.map(result => service.getDetails({placeId: result.place_id}, (result, response) => this.setState({placeIds: this.state.placeIds.concat(result)})))));
  }

  markerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  determineDistance(distance) {
    if (distance <= 500) {
      return 14;
    } else if (distance <= 2500) {
      return 12;
    } else if (distance <= 5000) {
      return 11;
    } else if (distance <= 10000) {
      return 10;
    } else if (distance <= 20000) {
      return 8;
    }
  }

  render() {
    const mapStyles = {
      position: 'relative',
      width: '100%',
      height: '550px',
      transition: 'all ease 0.5s'
    };

    return (
      <div className="map-container">
        <Map
          google={this.props.google}
          zoom={this.determineDistance(this.props.distance)}
          style={mapStyles}
          onReady={this.fetchPlaces}
          initialCenter={{
            lat: 43.091582,
            lng: -70.7898477
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
        {this.state.placeIds ? <MapList items={this.state.placeIds} /> : ''}
        </Map>
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
  agencies: PropTypes.array,
  distance: PropTypes.number,
  zoom: PropTypes.function
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC_UMxze-Yn_OlymlTcuN0cfG0fZh3mVck')
})(MapContainer);
