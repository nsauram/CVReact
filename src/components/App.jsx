import { useState } from "react";
import "./App.css";
import About from "./About";
import Education from "./Education";
import Project from "./Project";
import Home from "./Home";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
function App() {

  const navigate = useNavigate()

  const goAbout= ()=>{navigate('/about')}
  const goHome= ()=>{navigate('/')}
  const goEducation= ()=>{navigate('/education')}
  const goProject=()=> {navigate('/project')}


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="title-header" onClick={goHome}> NoeliaSaura</h1>
        </div>

        <div>
          <button className="select" onClick={goAbout}>Sobre Mi</button>
          <button className="select" onClick={goEducation}>Conocimientos</button>
          {/* Poner dentro de Education- skills */}
          <button className="select" onClick={goProject}>Projectos</button>
          <button className="select">Blog</button>
          <button className="select">Contacto</button>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education  />} />
        {/* <Route path="/skills" element={<Skills  />} /> */}
        <Route path="/about" element={<About  />} />
        <Route path="/project" element={<Project  />} />
      </Routes>

      <footer className="footer">
        <div className="contact">
          <p>66 106 47 96</p>
          <p>noelia.saura.m@gmail.com</p>
          <p>nsaura.herokuapp.com</p>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
