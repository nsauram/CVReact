import "./Home.css";

function Home() {
    return (
      
        <div className="App-home">
        <div className="wrapper">
          <p className="typing-demo">Bienvenido al CV de Noelia Saura.</p>
        </div>
    
        <div className="home-box">
          <img className="MyImage" src="MyImage.jpg" alt="" />
          <div className="display-box-text">
          <h2 className="text-box">Full Stack Junior Development</h2>
          <p className="text-dedication">
            " La mayoría de los programadores buenos programan no porque esperen que se les pague o para recibir la adulación de parte del público, sino porque es divertido el programar. "
          </p>
          </div>
          
        </div>
      </div>
    )
 
}
export default Home;
