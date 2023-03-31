import '../../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"
import barco from "./imagenes/barco-pirata.jpg"
import flores from "./imagenes/flores.jpg"
import guitarra from "./imagenes/guitarra.jpg"


const Item = () => {
    return(
        <section className="body-tienda">
        <div className="card">
        <img src={barco} className="card-img-top" alt=""/>
        <div class="card-body">
          <h5 className="card-title">Barco a vela</h5>
          <p className="card-text">Barco a vela europeo del año 1900 aprox.</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
      <div className="card">
        <img src={flores} className="card-img-top" alt=""/>
        <div class="card-body">
          <h5 className="card-title">Barco a vela</h5>
          <p className="card-text">Barco a vela europeo del año 1900 aprox.</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
      <div className="card">
        <img src={guitarra} className="card-img-top guitarra" alt=""/>
        <div class="card-body">
          <h5 className="card-title">Barco a vela</h5>
          <p className="card-text">Barco a vela europeo del año 1900 aprox.</p>
          <a href="#" className="btn btn-primary">Comprar</a>
        </div>
      </div>
      </section>

    )
}

export default Item