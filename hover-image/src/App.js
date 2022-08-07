import React, { useRef } from 'react';
import './App.css';
import Sidebarz from './Components/Sidebar';
import Iroh from "./image/UncleIroh.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Modalz from "./Components/Modalz";
import { Center, Grid } from '@mantine/core';


function App() {

  const ref = useRef(null);


  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="App">

        <div className="app-container">
          <Sidebarz />

          {/* <div className="firstColumn">
                  <h1 className="title">This is the hover title</h1>
                <img src={Pepe} className="image" />
                </div>

              <div className="secondColumn">
                <h1 className="title">Second hover Title</h1>
                <img src={Iroh} className="image" />
              </div> */}
          {/* <div className="title-container">
            <h1 className="Title"> Bryann</h1>
          </div> */}

          <div className="Main-button-container">

            <h1 className="Main-button-content" onClick={handleClick}>
              About me
            </h1>
            <h1 className="Main-button-content" onClick={handleClick}>
              Experience
            </h1>

            <h1 className="Main-button-content">
              Contacts
            </h1>

          </div>

        </div>

        <div className="intro-container">
          <div className="body-text">
            <div className="intro-text-container">
              <h1 className="intro-text"> Hi, I am a software developer</h1>
              <div className="linkedin-container">
                <FontAwesomeIcon icon={faLinkedin} />
                <a target="_blank" href="https://www.linkedin.com/in/bryann-poon-11970115b/" className="linkedin-link">Linkedin</a>
              </div>
              <Modalz className="Modal-button" />
            </div>
            <img src={Iroh} className="image" />
          </div>
        </div>


        <div className="middle-page-container">
          <h1>Background</h1>
          <Center style={{ width: 400, height: 200 }} className="middle-page-first-column">
            <p1 className="middle-page-first-column-text">
              I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and philosophy. I have excelled in a number of project management roles in diverse industries,
              and believe that my number one asset is my ability to adapt to any challenge that is
              thrown my way.
            </p1>
          </Center>

          <div className="middle-page-second-column">
            <h1>My Skills</h1>
            <p1>ReactJS, CSS, Javascript</p1>
          </div>
        </div>

        <div className='work-experience-section' ref={ref}>
          {/* <h1>Work Experience</h1> */}
          <Grid justify="center">
            <Grid.Col span={4}><h1>Work Experience</h1></Grid.Col>
            <Grid.Col span={4}><h1>Frontend Developer </h1>
              <br />
              <p1>August 2021 - May 2022</p1>
              <ul>
                <li>
                  Developing UI components for Temasek web applications
                </li>
                <li>
                  Testing components with Jest and Enzyme
                </li>
              </ul>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default App;
