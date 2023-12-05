import React from "react";
import "./maps.scss";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import LeafletMapWithClusters from "./LeafletMap.lazy"

export const SSRMaps = () => {
  return (
    <Container >
      <LeafletMapWithClusters></LeafletMapWithClusters>
    </Container>

  )
};

export default SSRMaps;