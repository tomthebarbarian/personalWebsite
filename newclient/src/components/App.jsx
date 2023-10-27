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


  const [nav, setNav] = useState({ showCS: true })

  const navigate = (param) => {
    switch (param) {
    case SHOWCS:
      setNav((prev) => ({
        ...{},
        showCS: true,
        showGeo: false
      }));
      break;
    case SHOWGEO:
      setNav((prev) => ({
        ...{},
        showCS: false,
        showGeo: true
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
            <Button variant="outline-info" onClick={() => navigate(SHOWCS)} >FullStack Resume</Button>
            <Button variant="outline-success" onClick={() => navigate(SHOWGEO)}>GIS Resume</Button>
          </ButtonGroup>
        </div>
      }
      {nav.showCS && <MyResume />}
      {nav.showGeo && <MyGeoResume />}
    </div>
  );
}
