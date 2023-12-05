import { MapOptions } from 'leaflet'
// React:import { FC, ReactNode } from 'react'
// import { ComponentChildren, FunctionalComponent } from 'preact'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './maps.scss'
// Obj children = {
//   center:[],
//   children:{},
//   zoom:13

// }

const center = [50.5, -100.5]
const vienna = [48.2082, 16.3738]

let position = vienna

const LeafletMap = () => {
  return (
    <MapContainer className="lmaps" maxZoom={18} zoom={13} center={position}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </MapContainer>
  )
}

const aside = () => {
  return (
    <MapContainer className="lmaps" center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMap