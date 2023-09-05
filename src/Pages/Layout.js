import { Outlet, Link } from "react-router-dom";
import us from "../imagenes/Usuario.png"
import logo from "../imagenes/logo.jpg"

const Layout = () =>{
 return <div>
    <nav className=" navbar bg-dark">
        <Link to ="/" className=""><img src={logo} alt="Logo shokun" width="15%"></img></Link>
        <Link to="/usuario"></Link>
        <Link to="/inicio"></Link>
        <Link to="/login" className="float-right"><img src={us} alt="Usuario" className="justify-content-end" width="15%"></img></Link>
      </nav>
    
    <Outlet />
 </div>;
}

export default Layout;