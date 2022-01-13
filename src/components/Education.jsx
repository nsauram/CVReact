import "./Education.css";
import { useState } from "react";

function Education() {
  const [view, setView] = useState("first");

  return (
    <>
      <div className="education">
        <div className="box">
          <div>
            <h3 className="title">Formación</h3>
          </div>
          <div>
            {view === "first" && (
              <div className="first">
                <h4 className="title">2021 - FULL STACK DEVELOPER</h4>
                <p className="education-subtitle">
                  NEOLAND | Septiembre de 2021 - Diciembre de 2021.
                </p>
                <ul className="education-list">
                  <li>
                    Web app (SPA) con MERN (MongoDB, Express, React, Nodejs)
                  </li>
                  <li>API con NodeJS (express)</li>
                  <li>Testing (mocha, chai)</li>
                  <li>Metodología ágil (kanban, scrum)</li>
                  <li>
                    Maquetación: HTML5, CSS3, Flexbox, CSS Grid, SASS,
                    MaterialUI
                  </li>
                </ul>
              </div>
            )}
            {view === "second" && (
              <div className="second">
                <h4 className="title">2020-Social Worker</h4>
                <p className="education-subtitle">
                  Universidad de Barcelona | 2016 - 2020
                </p>
                <ul className="education-list">
                  <li>Habilidades sociales y de comunicación</li>
                  <li>Metodología aplicada al Trabajo Social.</li>
                  <li>Investigación y Diagnóstico en Trabajo Social.</li>
                </ul>
              </div>
            )}
          </div>
          <div className="button" >
            <button onClick={() => setView("first")}>
              Back
            </button>
            <button onClick={() => setView("second")}>
              Next
            </button>
          </div>
        </div>
        <div className="box">
          <div>
          <h3 className="title">Experiencia</h3>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default Education;
