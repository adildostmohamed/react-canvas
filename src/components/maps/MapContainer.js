import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import MapMarker from 'components/maps/MapMarker';


export default class MapContainer extends Component {
  static defaultProps = {
    center: {lat: 51.5057, lng: -0.0837},
    zoom: 15
  };

  render() {
    return (
      <div id="map-container">
        <GoogleMap
          bootstrapURLKeys={{
            key: 'AIzaSyCM_GiKmQAVb2effatpJKmDzc9ObD4uMMg',
            language: 'en'
          }}
          defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}>
         <MapMarker lat={51.5057} lng={-0.0837} />
        </GoogleMap>
      </div>
    )
  }
}
