import React, { useState } from 'react';
import './App.css';
import Sidebarz from './Components/Sidebar';
import Pepe from "./image/SailorPepe.png";
import Iroh from "./image/UncleIroh.png";
import Modalz from './Components/Modalz';

function App() {

  const handleAboutClick = () => {
    console.log('cunt');
  }

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
          <div className="title-container">
            <h1 className="Title"> Bryann</h1>
          </div>

          <div className="Main-button-container">

            <h1 className="Main-button-content" onClick={handleAboutClick}>
              About me
            </h1>
            <h1 className="Main-button-content">
              Experience
            </h1>

            <h1 className="Main-button-content">
              Contacts
            </h1>

          </div>

        </div>

        <div className="body-text">
          <p1> Hi, I am a software developer</p1>
        </div>

      </div>
    </>
  );
}

export default App;
