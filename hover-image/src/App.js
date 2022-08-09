import React, { useRef } from 'react';
import './App.css';
import Iroh from "./image/UncleIroh.png";
import Pepe from "./image/SailorPepe.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Modalz from "./Components/Modalz";
import { Center, Grid, Image, Blockquote, Text, Paper } from '@mantine/core';
import Cunt from "./Components/cunt";

function App() {

  const ref = useRef(null);


  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="App">

        <div className="app-container">
          {/* <Sidebarz /> */}

          <Cunt />
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
              ABOUT ME
            </h1>
            <h1 className="Main-button-content" onClick={handleClick}>
              EXPERIENCE
            </h1>

            <h1 className="Main-button-content">
              CONTACTS
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
              {/* <Modalz className="Modal-button" /> */}
            </div>
            <img src={Iroh} className="image" />
          </div>
        </div>


        <div className="about-me-section" ref={ref}>
          <Grid justify="center">
            <Grid.Col span={4} className="column">
              <h1 style={{ textAlign: "center" }}>Background</h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <Text>
                  I’ve gone through a number of phases in my career, and each of them has informed my current work ethos and philosophy. I have excelled in a number of project management roles in diverse industries,
                  and believe that my number one asset is my ability to adapt to any challenge that is
                  thrown my way.
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={4}>
              <h1 style={{ textAlign: "center" }}>My Skills</h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <ul>
                  <li>
                    ReactJS
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    Javascript
                  </li>
                </ul>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>

        <div className='image-row'>
          <Grid justify="center">
            <Grid.Col span={4}><img src={Pepe} alt="profile_picture" className="image-row-iamges" /></Grid.Col>
            <Grid.Col span={4}><img src={Pepe} alt="profile_picture" className="image-row-iamges" /></Grid.Col>
            <Grid.Col span={4}><img src={Pepe} alt="profile_picture" className="image-row-iamges" /></Grid.Col>
          </Grid>
        </div>

        <div className='work-experience-section'>
          <Grid justify="center">
            <Grid.Col span={4}><h1>Work Experience</h1></Grid.Col>
            <Grid.Col span={4}>
              <h1 style={{ textAlign: "center" }}>
                Data Engineer
              </h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <p1>May 2022 - Present</p1>
                <ul>
                  <li>
                    Maintaining and monitoring data ingestion DAGs
                  </li>
                  <li>
                    Developing new datapipelines
                  </li>
                  <li>
                    Working with developers to diagnose issues
                  </li>
                </ul>
              </Paper>

              <h1 style={{ textAlign: "center" }}>Frontend Developer </h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <p1>August 2021 - May 2022</p1>
                <ul>
                  <li>
                    Developing UI components for Temasek web applications
                  </li>
                  <li>
                    Testing components with Jest and Enzyme
                  </li>
                  <li>
                    Working with business users to understand user requirements
                  </li>
                </ul>
              </Paper>

              <h1 style={{ textAlign: "center" }}>IT Support Engineer</h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <p1>January 2018 - June 2018</p1>
                <ul>
                  <li>
                    Installing and configuring computer hardware, software, systems, networks, printers and scanners
                  </li>
                  <li>
                    Monitoring and maintaining computer systems and networks
                  </li>
                  <li>
                    Responding in a timely manner to service issues and requests
                  </li>
                </ul>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>

        <div className="Education-section">
          <Grid justify="center">
            <Grid.Col span={4}><h1>Education</h1></Grid.Col>
            <Grid.Col span={4}>
              <h1>University of London</h1>
              <Paper shadow="xl" radius="xl" p="xl">
                <p1>September 2018 - September 2021</p1>
                <ul>
                  <li>
                    Bsc Computing and Information Systems
                  </li>
                </ul>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>

        <div className="inspiration-quote-section">
          <Blockquote color="yellow" cite="– Forrest Gump">
            Life is like an npm install – you never know what you are going to get.
          </Blockquote>
        </div>
      </div>
    </>
  );
}

export default App;
