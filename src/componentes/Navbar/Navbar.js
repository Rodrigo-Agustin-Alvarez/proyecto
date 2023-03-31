import '../../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid bg-per">
    <a className="titulo" href="index.html">Tienda cheta</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-nav" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">¿Quienes Somos?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="index.html">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href= "index.html">Tú compra 🛒</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Buscar producto</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar

/* <nav classNameName='estilonav'>
    <h2 classNameName='titulo'>
        Tienda cheta
    </h2>
    <ul classNameName="d-flex">
        <li>
            Contacto
        </li>
        <li>
            Mi compra
        </li>
        <li>
            Ingresar
        </li>
    </ul>
    
</nav> */