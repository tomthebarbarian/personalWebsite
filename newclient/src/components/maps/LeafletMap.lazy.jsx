import { Suspense, lazy } from 'preact/compat'
// React: import type { FC, ReactNode } from 'react'

const LazyLeafletMap = lazy(() => import('./LeafletMap'))
// const LazyMarker = lazy(async () => (await import('react-leaflet')).Marker)
// const LazyMarkerCluster = lazy(
//   async() => (await import('./LeafletMap')).MarkerCluster
// )


export const LeafletMapWithClusters = (center, markers, ...options) => {
  return (
    <Suspense fallback={<div className="h-[200px]" />}>
      <LazyLeafletMap center={center} zoom={13} {...options}>
        <></>
      </LazyLeafletMap>
    </Suspense>
  )
}
export default LeafletMapWithClusters;