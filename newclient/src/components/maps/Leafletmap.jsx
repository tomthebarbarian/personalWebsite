import  { MapOptions } from 'leaflet'
// React: import type { FC, ReactNode } from 'react'
import  { ComponentChildren, FunctionalComponent } from 'preact'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const LeafletMap = (children, ...options) => {
  return (
    <MapContainer
      className="h-[200px] w-full relative"
      maxZoom={18}
      {...options}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {children}
    </MapContainer>
  )
}

export default LeafletMap