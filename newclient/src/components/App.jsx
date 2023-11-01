import './App.scss';
import './custom.scss';
import { useState, useHooks, useEffect } from 'react';
import {
  Container, Navbar, Row, Col, FormControl, Form,
  Button, Nav, NavDropdown, ButtonGroup, Dropdown,
  DropdownButton
} from 'react-bootstrap';

// import { Container, Navbar, Button,  Nav, Row, Col, Modal, } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MyResume } from './resume/resume';
import { MyGeoResume } from './resume/georesume';
export const App = function () {
  //custom hook separate state logic from app rendering
 

  const SHOWCS = 0
  const SHOWGEO = 1
  const SHOWMAP = 2
  const SHOWPROJ = 3


  const [nav, setNav] = useState({ showCS: true })

  const navigate = (param) => {
    switch (param) {
    case SHOWCS:
      setNav((prev) => ({
        ...{},
        showCS: true,
        showGeo: false,
        showProj: false,
        showMap: false
      }));
      break;
    case SHOWGEO:
      setNav((prev) => ({
        ...{},
        showCS: false,
        showGeo: true,
        showProj: false,
        showMap: false
      }));
      break;
    case SHOWMAP:
      setNav((prev) => ({
        ...{},
        showCS: false,
        showGeo: false,
        showProj: false,
        showMap: true
      }));
      break;
    case SHOWPROJ:
      setNav((prev) => ({
        ...{},
        showCS: false,
        showProj: true,
        showGeo: false,
        showMap: false
      }));
      break;
    default:
      // setNav((prev) => ({ ...{}, landing: true }));
      setNav((prev) => ({ ...{}, showCS: true }));
    }

    console.log('-----------------[nav]---------------', nav);
  };

  return (
    <div>
      {
        <div className='resumechoice'>
          <ButtonGroup horizontal>
            <Button variant="outline-secondary" onClick={() => console(SHOWPROJ)}>My Web Projects</Button>
            <Button variant="outline-info" onClick={() => navigate(SHOWCS)} >FullStack Resume</Button>
            <Button variant="outline-success" onClick={() => navigate(SHOWGEO)}>GIS Resume</Button>
            <Button variant="outline-secondary" onClick={() => console(SHOWMAP)}>MAPS</Button>
          </ButtonGroup>
        </div>
      }
      {nav.showCS && <MyResume />}
      {nav.showGeo && <MyGeoResume />}
      {nav.showMap && <MyGeoResume />}
      {nav.showProj && <MyGeoResume />}
    </div>
  );
}
