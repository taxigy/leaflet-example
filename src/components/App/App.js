import React, { Component } from 'react';
import {
  Map,
  TileLayer
} from 'react-leaflet';
import styles from './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Map
          className={styles.map}
          center={[0, 0]}
          zoom={5}
          scrollWheelZoom={false}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='k tnx' />
        </Map>
      </div>
    );
  }
}
