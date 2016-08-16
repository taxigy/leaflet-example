import React, { Component } from 'react';
import L from 'leaflet';
import styles from './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const {
      mapNode
    } = this;
    const map = L.map('map', {
      // center: [47.59401, -122.24406],
      minZoom: 15,
      maxZoom: 16,
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false
    });
    // const tiles = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}');
    const tiles = L.tileLayer('/tile/{z}/{x}/{y}', {
      tileSize: 256
    });
    const southWest = map.unproject([0, 1792], 15);
    const northEast = map.unproject([2048 + 512, 0], 15);

    map.setMaxBounds(new L.LatLngBounds(southWest, northEast));
    map.setView(map.unproject([0, 0], 15), 15);

    tiles.addTo(map);

    mapNode.addEventListener('wheel', (e) => {
      e.preventDefault();

      const c = map.getCenter();
      map.panTo({
        lat: c.lat + e.wheelDeltaY / 100000,
        lng: c.lng + e.wheelDeltaX / -100000
      }, {
        animate: true
      });
    });

    console.log(map);
  }

  render() {
    return (
      <div className={styles.app}>
        <div
          className={styles.map}
          id="map"
          ref={node => {
            this.mapNode = node;
          }} />
      </div>
    );
  }
}
