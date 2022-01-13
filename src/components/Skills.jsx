import './Skills.css'


function Skills() {
  return <>
    <div className='skills'>

    <div class="fila">
        <div class="columna">
            <img src={require ("./images/js.png")}/>
        </div>
        <div class="columna">
        <img src={require ("./images/css.png")}/>
         </div>
        <div class="columna">
        <img src={require ("./images/html.png")}/>
        </div>
    </div>
    <div class="fila">
        <div class="columna">
        <img src={require ("./images/sass.png")}/>
        </div>
        <div class="columna">
        <img src={require ("./images/node.png")}/>
        </div>
        <div class="columna">
        <img src={require ("./images/mui.png")}/>
        </div>
    </div>
    <div class="fila">
        <div class="columna">
        <img src={require ("./images/react.png")}/>
        </div>
        <div class="columna">
        <img src={require ("./images/git.png")}/>
        </div>
        <div class="columna">
        <img src={require ("./images/mongo.png")}/>
        </div>
    </div>

</div>

   
  
  </>;
}
export default Skills
