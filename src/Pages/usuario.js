import React from 'react'
import "../Stlye/interno.css"

export const usuario = () => {
  return (
    
    <>
    <div class="container">
        <div class="row">
          <div class="col-sm">
            <h3>Preguntas para IA</h3>
            <button class="button" value="Personalidad">Personalidad</button><br/>
            <button class="button" value="Ventajas">Ventajas</button><br/>
            <button class="button" value="Limitaciones">Limitaciones</button><br/>
            <button class="button" value="Objetivos">Objetivos</button><br/>
            <button class="button" value="No">Preguntas sin responder</button>
          </div>
          <div class="col-sm">
            <h3>Configuracion</h3>
            <br></br>
            <div class="row">
              <div class="col">
                Formalidad
              </div>
              <div class="col">
                <input type="number" name="formal" id="formal"  class="num"></input>  <small>0-10</small>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                Amabilidad
              </div>
              <div class="col">
                <input type="number" name="Amabilidad" id="Amabilidad"  class="num"></input>  <small>0-10</small>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                Humor
              </div>
              <div class="col">
                <input type="number" name="Humor" id="Humor" class="num"></input>  <small>0-10</small>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                Agresividad
              </div>
              <div class="col">
                <input type="number" name="Agresividad" id="Agresividad"  class="num"></input>  <small>0-10</small>
              </div>
            </div>
            <br></br>
            <div class="row">
              <div class="col">
                Velocidad
              </div>
              <div class="col">
                <input type="number" name="Velocidad" id="Velocidad"  class="num"></input>  <small>0-10</small>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <h3>Entrenamiento</h3>
            <div class="cuadro">
              <div class="vista">
                <p id="textomensaje"></p>
              </div>
              <br />
              <div class="envi">
                <input type="text" name="" id="escribir" width="100px" placeholder="Escribir mensaje" class="escribir"></input>
                <br></br>
                <input type="submit" id="enviar" className="enviar" value="Enviar"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
      
  )
}

window.onload = function(){
  var boton_presionado
  var boton2= document.querySelectorAll("body > div#root > div.App > div > div.container > div.row > div.col-sm > button.button")
  //recorre todos los botones
  for(boton_presionado of boton2){
    boton_presionado.addEventListener("click", (e) => {
      var hijo = e.target;
      alert(hijo.value)
    })
  }

  //let envi=document.getElementById("enviar")
  /* let enviado=document.getElementById("escribir")
  let texto=document.getElementById("textomensaje")
  let buttonEnviar = document.querySelector("#enviar")
  buttonEnviar.addEventListener("click", (e) => {
    texto.innerHTML="Yo: "+enviado.value
  }) */
  /* envi.addEventListener("click",(e) => {
   
    texto.innerHTML="Yo: "+enviado.value
  }) */
}
document.addEventListener("DOMContentLoaded", function(event) {
  let buttonEnviar = document.querySelector("#enviar")
  let texto=document.getElementById("textomensaje")
  let enviado=document.getElementById("escribir")
  buttonEnviar.addEventListener("click", (e) => {
    texto.innerHTML="Yo: "+enviado.value
  })
});

export default usuario