import './App.css';
import React, { Component } from 'react';
import background from "./img/card_background.jpg";
import Button from '@material-ui/core/Button';
import {Link } from "react-router-dom";

function App() {
  return (
    <body>
    
      <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' , width: '100vw',
        height: '100vh'  }}>
           <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: '30vh'
          }}
        >
          <span style={{ fontFamily: 'Tahoma', fontSize: '72px', paddingBottom: '5vh'}}>
            Card Game
          </span>
          <Link style={{ textDecoration: 'none' }} to="/mainpage"><Button variant="contained" color="primary"  style={{ width: "400px",
                height: "60px",
                minWidth: "200px",
                display: "block" }}  >
                  Start the game
      </Button> </Link>

        </div>
      
      </div>

      </body>
    

      // {/* <header className="App-header">
      // <Card />
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header> */}
   
  );
}



export default App;
