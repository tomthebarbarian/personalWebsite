import { MapOptions } from 'leaflet'
// React:import { FC, ReactNode } from 'react'
// import { ComponentChildren, FunctionalComponent } from 'preact'
import { MapContainer, Marker, Popup, TileLayer, ImageOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './maps.scss'
// Obj children = {
//   center:[],
//   children:{},
//   zoom:13

// }

const center = [50.5, -100.5]
const vienna = [48.2082, 16.3738]

const pvBounds = [[40,-140], [60, -52]]

let position = center

const LeafletMap = () => {
  return (
    <MapContainer className="lmaps" maxZoom={18} zoom={3} center={position}
    >
      <TileLayer
        id='mapbox/streets-v11'
        tileSize={512}
        zoomOffset={-1}
        accessToken='pk.eyJ1IjoidG9tdGhlYmFyYmFyaWFuIiwiYSI6ImNqZmZ4Z2ZvczJhaXgzM3BheHR3Nml2OGYifQ.jq0Tt-4aD5EpAaQ8ihykLw'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
      />
      <ImageOverlay url="./bluestored.png" bounds={pvBounds} opacity={0.8}></ImageOverlay>
      {/* <Marker position={position}></Marker> */}
    </MapContainer>
  )
}

export default LeafletMap