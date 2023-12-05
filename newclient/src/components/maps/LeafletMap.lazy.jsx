import React, { Suspense, lazy } from 'react'
// import { Suspense, lazy } from 'preact/compat'
// React: import type { FC, ReactNode } from 'react'

const LazyLeafletMap = lazy(() => import('./LeafletMap'))

const LazyMarker = lazy(async() => (await import('react-leaflet')).Marker)
const LazyMarkerCluster = lazy(
  async() => (await import('./LeafletMap')).MarkerCluster
)
import { MapOptions } from 'leaflet'

export const LeafletMapWithClusters = () => {
  return (
    <Suspense fallback={<div className="h-[200px]" />}>
      <LazyLeafletMap >
      </LazyLeafletMap>
    </Suspense>
  )
}
export default LeafletMapWithClusters;