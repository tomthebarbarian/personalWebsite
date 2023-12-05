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
    <MapContainer className="lmaps" maxZoom={18} zoom={4} center={position}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ImageOverlay url="./bluestored.png" bounds={pvBounds} opacity={0.8}></ImageOverlay>
      <Marker position={position}></Marker>
    </MapContainer>
  )
}

export default LeafletMap