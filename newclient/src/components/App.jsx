import './App.scss';
import './custom.scss';
import { useState, useHooks, useEffect } from 'react';

// import { Container, Navbar, Button,  Nav, Row, Col, Modal, } from 'react-bootstrap';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import useAppData from './useAppData.js';
import { MyResume } from './resume/resume';
import { MyGeoResume } from './resume/georesume';
export const App = function () {
  //custom hook separate state logic from app rendering
  const {
    state,
    setState,
    // loading,
    apiLogin,
    apiLogout,
    apiRegister,
    // fnSetDay,
    // resetdB,
    // fetchDays,
    // fetchAppts,
  } = useAppData();



  return (
    <>
      {!state.logged && <MyResume register={()=>console.log('aljflasfjaljfasljfaslfdj')} /> }
      {<MyGeoResume/>}
    </>
  );
}
