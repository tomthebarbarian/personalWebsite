import React from 'react';
import { Button, Modal, Form, Row, Col, InputGroup } from 'react-bootstrap';
import classNames from 'classnames';
import { useState } from 'react';

import '../custom.scss';
import './resume.scss';

export const MyResume = (props) => {
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
                  <div className="name">Connex Telecommunications</div>
                  <div className="addr">Richmond Hill, ON</div>
                </div>
                <div className="right">
                  <div className="name">Application Developer</div>
                  <div className="desc">Jan. 2022 - Feb. 2023</div>
                </div>
              </div>
              <div className="duration">_</div>
              <div className="duration">• Managed 50,000 monthly user requests by developing robust Java and Spring-based application middlelayer, ensuring seamless functionality in the client environment using of Spring RESTful APIs.</div>
              <div className="duration">• Doubled help desk agent productivity by eliminating lookup time; using customer info displaying screen pops built with Javascript and React</div>
              <div className="duration">• Empowered agents with a 500% increase in interactions by deploying Google Dialogflow and Javascript web chat</div>
              <div className="duration">• Delivered NLU voice reporting service for 300 requests a month, valued at 7 million dollars, with Javascript</div>
              <div className="duration">• Contributed code automatically using Javascript, Jenkins, Terraform, Docker and Azure devops pipeline</div>
              <div className="duration">• Configured and deployed scalable Cloud Customer services for 7 offices with 20-150 employees using
                Genesys AWS SaaS</div>
              <div className="duration">• Mentored and onboarded 3 of the 5 team members on the middle layer team</div>
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
              <div className="name">Market Breadth</div>
              <div className="duration">• Set up data collection using Python yfinance</div>
              <div className="duration">• Provided additional statistical analysis and visualization through Pandas and Numpy</div>
              <div className="duration">• Presents various stock market analytics using Pyplot charts on Flask pages hosted on Google App Engine</div>
              <div className="name">Solar Hat</div>
              <div className="duration">• Mapped solar energy generation potential across Canada with Node Application using: Leaflet.js, React.js, Express.js and Mongodb</div>
              <div className="duration">• Preserved user registration and generation sites using Mongodb</div>
              <div className="duration">• Provided additional statistical analysis and visualization through Bootstrap</div>
              <div className="duration">• Presents the cost savings opportunity of installing solar panels through Chart.JS</div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="section__title">Skills</div>
          <div className="skills">
            <div className="name">
              Javascript, Java, C#, Python
            </div>
            <div className="name">
              React, Spring, Flask
            </div><div className="name">
              Git/Github, Docker, Terraform, Google Cloud Platform, Azure, AWS
            </div><div className="name">
              pandas, NumPy, Matplotlib, Junit, Chai, Mocha
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
  </div>
}

