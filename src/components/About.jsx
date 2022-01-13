import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <h2 className="about-title">Sobre Mi</h2>
        <div className="about-data">
          <p>Noelia Saura Martinez, 26 años, Barcelona</p>
        </div>
        <div >
          <div className="about-box">
            <ul className="about-doc">
              <li>
                Estoy recién graduada como Full Stack Developer, tengo mucha
                motivación y inquietud en poder entrar a formar parte de una
                empresa en la que poder aplicar todos mis conocimientos y, al
                mismo tiempo, que me permita desarrollarme profesionalmente.
              </li>
              <li>
                Gracias a mi formación, considero que puedo aportar valor y
                seguir desarrollándome profesionalmente en una compañía que
                coincida con mis valores y expectativas.
              </li>
            </ul>
            <div>
              <img className="img-programming" src="programming.jpg" alt="" />
            </div>
          </div>
          <div className="about-box">
            <div>
              <img className="img-programming" src="movile.jpg" alt="" />
            </div>
            <ul className="about-doc">
              <li>
                Como persona organizada y con una gran motivación, soy capaz de
                adaptarme a cualquier circunstancia y dar siempre lo mejor de mi
                en cualquier proyecto, al mismo tiempo que me esfuerzo por
                trabajar en equipo y fomentar valores como los del compañerismo.
              </li>
              <li>
                Soy un tipo de trabajador que esta acostumbrado al trabajo bajo
                presión, tengo varios años de experencia en atención al cliente
                y asesoramiento tecnologico. Me considero una persona
                resolutiva, productiva, con buen animo y capaz de resolver
                problemas facilmente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
