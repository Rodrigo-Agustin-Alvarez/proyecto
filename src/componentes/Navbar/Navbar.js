import '../../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg alto">

        <div className="container-fluid bg-per">
          <Link to= {'/'} className="titulo"> Tienda Cheta</Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-nav" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to= {"/QuienesSomos"} className="nav-link active">
                ¿Quienes Somos?
                </Link>
              </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Categorias</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Realismo</a></li>
                  <li><a className="dropdown-item" href="#">Expresionismo</a></li>
                  <li><a className="dropdown-item" href="#">Abstracto</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Contacto</a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>

  
</nav>
  )
}

export default Navbar
