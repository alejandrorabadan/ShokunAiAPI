import us from './imagenes/Usuario.png';

import { Routes, Route } from 'react-router-dom';
import Layout  from "./Pages/Layout";
import Login  from "./Pages/login";
import Inicio from "./Pages/inicio";
import Usuario from "./Pages/usuario"

//INDEX
function prueba(){
  return(
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Layout />}/>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Usuario" element={<Usuario />}/>
        </Routes>
      
    </div>
  );
}


export default  prueba ;
