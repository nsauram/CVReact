import { useState } from "react";
import "./App.css";
import About from "./About";
import Education from "./Education";



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




      <footer>
        <p>contact</p>
      </footer>
    </div>
  );
}

export default App;
