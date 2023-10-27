import React from 'react';
import { Button, Modal, Form, Row, Col, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import { useState } from 'react';

import '../custom.scss';
import './resume.scss';

export const MyGeoResume = (props) => {
  return <div>
    <div className="container">
      <div className="header">
        <div className="full-name">
          <span className="first-name">Tom</span>
          <span className="last-name">Zhang</span>
        </div>
        <div className="contact-info">
          <span className="email">Email: </span>
          <span className="email-val">tom.zhang@gmail.com</span>
          <span className="separator"></span>
          <span className="phone">Phone: </span>
          <span className="phone-val">226-600-4912</span>
        </div>

      </div>
      <div className="details">
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            <div className="section__list-item">
              <div>
                <div className="left">
                  <div className="name">JANA CORPORATION</div>
                  <div className="addr">Aurora, ON</div>
                </div>
                <div className="right">
                  <div className="name">GIS ANALYST</div>
                  <div className="desc">Jan. 2019 - Apr. 2019</div>
                </div>
              </div>
              <div className="duration">_</div>
              <div className="duration">• QAQCed and verified 500 km of pipeline data for risk analysis by joining relevant documents to Access Database tables</div>
              <div className="duration">•  Automated the correction of 200-meter offset data errors of pipeline fittings in QGIS using python</div>
              <div className="duration">•  Provided proximity analysis of Ontario gas pipeline infrastructure risk using QGIS</div>

              <div className="section__list-item">
                <div>
                  <div className="left">
                    <div className="name">AGRICULTURE AND AGRIFOOD CANADA</div>
                    <div className="addr">Regina, SK</div>
                  </div>
                  <div className="right">
                    <div className="name">AGRICLIMATE ANALYST</div>
                    <div className="desc">May. 2018 - Aug. 2018</div>
                  </div>
                </div>
                <div className="duration">_</div>
                <div className="duration">• Reduced 5 hours of biologist work to 10 minutes by automating the creation of 32 climate maps with ArcPy</div>
                <div className="duration">• Provided drought data support in ESRI ArcPro to prairie farmers for relief payment applications</div>
              </div>
              <div className="section__list-item">
                <div>
                  <div className="left">
                    <div className="name">Environment and Climate Change Canada</div>
                    <div className="addr">Ottawa, ON</div>
                  </div>
                  <div className="right">
                    <div className="name">Air Quality Data Analyst</div>
                    <div className="desc">Sept. 2017 - Dec. 2017</div>
                  </div>
                </div>
                <div className="duration">_</div>
                <div className="duration">• Created maps and time series graphs of near road pollution data with R</div>
                <div className="duration">• Verified MySQL pollution data using SQL in Matlab and python scripts</div>
                <div className="duration">• Ground truthed Esri Geodatabase data using ArcPro to ensure accurate land use calculations</div>
                <div className="duration">• Classified pollution severity of 19 study areas by population, landuse and pollution within 400m using R</div>
                <div className="duration">• Trained colleagues in python script usage to enable smooth project handover</div>

              </div>
              <div className="section__list-item">
                <div>
                  <div className="left">
                    <div className="name">Environment and Climate Change Canada</div>
                    <div className="addr">Sackville, NB</div>
                  </div>
                  <div className="right">
                    <div className="name">Wildlife Data Analyst</div>
                    <div className="desc">Jan. 2017 - Apr. 2017</div>
                  </div>
                </div>
                <div className="duration">_</div>
                <div className="duration">• Identified percentage of protected wildlife area using ArcMap areal analysis to inform work priority</div>
                <div className="duration">• Automated data loading of CSV files into Mysql Db using Safe Software FME, saving biologist worktime</div>
                <div className="duration">• Created composite area image with aerial photos using Arc Map Mosaic to provide updated overview </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Education</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="left">
                  <div className="name">University of Waterloo</div>
                  <div className="duration">Bachelors of Environment with CS minor</div>
                </div>
                <div className="right">
                  <div className="addr">Waterloo, ON</div>
                  <div className="duration">Sept 2015 - Apr 2020</div>
                </div>
                <div className="left">
                  <div className="name">Lighthouse Labs</div>
                  <div className="duration">Full Stack Web Developer Certificate</div>
                </div>
                <div className="right">
                  <div className="addr">Toronto, ON</div>
                  <div className="duration">Sept 2021 - Dec 2021</div>
                </div>
              </div>
            </div>
            <div className="section__title">Projects</div>
            <div className="section__list">
              <div className="section__list-item">
                <div className="name">Solar Hat</div>
                <div className="duration">• Mapped solar energy generation potential across Canada with Node Application using: Leaflet.js, React.js, Express.js and Mongodb</div>
                <div className="duration">• Preserved user registration and generation sites using Mongodb</div>
                <div className="duration">• Provided additional statistical analysis and visualization through Bootstrap</div>
                <div className="duration">• Presents the cost savings opportunity of installing solar panels through Chart.JS</div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">Technical Skills</div>
            <div className="skills">
              <div className="name">
                .NET, Java, Python, SQL (Postgres, Oracle, Mysql), JavaScript, HTML/CSS, R
              </div>
              <div className="name">
                React, Spring, Flask
              </div><div className="name">
                ArcMap, ArcPro, RStudio, Anaconda
              </div><div className="name">
                pandas, NumPy, Matplotlib, Chai, Mocha
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section__title">
              Interests
            </div>
            <div className="section__list">
              <div className="section__list-item">
                Maps, History, Reading, Bicycling, Electric Bikes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  </div>
}

export default MyGeoResume

