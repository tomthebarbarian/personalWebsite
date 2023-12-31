import React from "react";
import "./maps.scss";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const SolarPotential = () => {
  return (
    <div>
      <>This 2021 map shows the areas of Canada with photovotaic potential. The redder the better </>
      <Image className="displaymaps" src="../../../public/bluestored.png" />
    </div>
      
  )
};

const JuryBiking = () => {
  return (
    <div>
      <>This 2023 map describes the difference in accessible area between walking and biking</>
      <Image className="displaymaps" src="../../../public/WilfridJuryAccessibility.png" />
    </div>
  );
}

export const Maps = () => {
  return (
    <Container>
      <Row>
        <SolarPotential></SolarPotential>
      </Row>
      <Row>
        <JuryBiking />
      </Row>
    </Container>

  )
};

export default Maps;