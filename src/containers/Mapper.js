import React from 'react';
import MapList from '../components/MapList';
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
    const service = new google.maps.places.PlacesService(map);
    agencies.map(agency => service.nearbySearch({location: {lat, lng}, radius: 10000, keyword:agency.title}, (results) => results.map(result => service.getDetails({placeId: result.place_id}, (result, response) => this.setState({placeIds: this.state.placeIds.concat(result)})))));
  }

  markerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    const mapStyles = {
      position: 'relative',
      width: '100%',
      height: '337px'
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={11}
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
        </Map>
        <MapList className={this.state.placeIds ? 'showItems' : 'hideItems'} items={this.state.placeIds} />
      </div>
    );
  }
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired,
  agencies: PropTypes.array
};

export default GoogleApiWrapper({
  apiKey: ('AIzaSyC_UMxze-Yn_OlymlTcuN0cfG0fZh3mVck')
})(MapContainer);
