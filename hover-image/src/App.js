import React, { useState } from 'react';
import './App.css';
import Sidebarz from './Components/Sidebar';
import Pepe from "./image/SailorPepe.png";
import Iroh from "./image/UncleIroh.png";
import Modalz from './Components/Modalz';

function App() {

  return (
    <>
      <div className="App">
        <Sidebarz />

        <div className="firstColumn">
          <h1 className="title">This is the hover title</h1>
          <img src={Pepe} className="image" />
        </div>

        <div className="secondColumn">
          <h1 className="title">Second hover Title</h1>
          <img src={Iroh} className="image" />
        </div>

      </div>
    </>
  );
}

export default App;
