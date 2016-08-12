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
      center: [47.59401, -122.24406],
      maxZoom: 17,
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false
    });
    const tiles = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}');

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
        {`<Map
          className={styles.map}
          center={[0, 0]}
          zoom={5}
          zoomControl={false}
          attributionControl={false}
          scrollWheelZoom={false}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='k tnx' />
        </Map>`}
      </div>
    );
  }
}
