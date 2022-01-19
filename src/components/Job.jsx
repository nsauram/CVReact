import { useState } from "react";
import "./Education.css";
function Job() {
  const [view, setView] = useState("first");
  return (
    <>
      <div className="box">
        <div>
          <h3 className="title">Experiencia</h3>
        </div>
        <div>
          {view === "first" && (
            <div className="first">
              <h4 className="subtitle">HELP DESK</h4>
              <p className="education-subtitle">
                Col·legi de farmacèutics | 2021- actualmente.
              </p>
              <ul className="education-list">
                <li>
                  Gestión y resoluc ión inc idenc ias técni cas de software
                  farmacéutico
                </li>
                <li>Gestión de incidencias de conexión de redes</li>
                <li>VPN, PING, TRACERT, TERMINAL (BASH) , cambio de IPs</li>
                <li>Metodología de trabajo ágil</li>
              </ul>
            </div>
          )}
          {view === "second" && (
            <div className="second">
              <h4 className="subtitle">ASESOR/HELP DESK TECNOLOGICO</h4>
              <p className="education-subtitle">
                SAMSUNG- El Corte Ingles | 2017 - 2020
              </p>
              <ul className="education-list">
                <li>
                  Asesoramiento de tecnología (Periféricos e smartphones )
                </li>
                <li> Gestión y resolución incidencias software e hardware</li>
              </ul>
            </div>
          )}
        </div>
        <div className="buttons">
          <button className='BackNext' onClick={() => setView("first")}>Back</button>
          <button className='BackNext' onClick={() => setView("second")}>Next</button>
        </div>
      </div>
    </>
  );
}
export default Job;
