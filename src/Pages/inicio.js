import React from 'react'
import "../Stlye/inicio.css"
import { Routes, Route } from 'react-router-dom';
import Layout  from "./Layout";
import Login  from "./login";
import Usuario from "./usuario"

export const inicio = () => {
  return (
    <body id="body">
    <div id="texto">
        <h1>El Primer CRM con inteligencia Artificial real</h1>
        <h3>Coming soon...</h3> 
      </div>
      </body>
  )
}

export default inicio