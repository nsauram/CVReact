import { useState } from "react";
import "./App.css";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <p className="typing-demo">Bienvenido al CV de Noelia Saura.</p>
        </div>

        <div className="header-box">
          <img className="MyImage" src="MyImage.jpg" alt="" />
          <p className="text-box">Full Stack Junior Development</p>
        </div>
      </header>

      <About></About>

      <Education></Education>

      <Skills></Skills>

      <footer className="footer">
        <div className="contact">
          <p>66 106 47 96</p>
          <p>noelia.saura.m@gmail.com</p>
          <p>nsaura.herokuapp.com</p>
        </div>
        <div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
