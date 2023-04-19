import Count from "../itemCount/Count"
import barco from "../Items/imagenes/barco-pirata.jpg"
import flores from "../Items/imagenes/flores.jpg"
import guitarra from "../Items/imagenes/guitarra.jpg"
import floreschicas from "../Items/imagenes/flores-chicas.jpg"
import mujer from "../Items/imagenes/mujer-colores.jpg"
import ovejitas from "../Items/imagenes/ovejitas.jpg"
import paisaje from "../Items/imagenes/paisaje-arroyo.jpg"
import piedras from "../Items/imagenes/piedras.jpg"
import vacas from "../Items/imagenes/vacas.jpg"
import benecia from "../Items/imagenes/benecia.jpg"
import europa from "../Items/imagenes/europa.jpg"
import manchas from "../Items/imagenes/manchas.jpg"
import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import '../../css/style.css'

const ItemListContainer = ({greeting}) => {

    const [cuadros, setCuadros] = useState([]);



    useEffect(()=>{


        const ApiProductos = new Promise(
          (resolved, rejected) => {
             resolved([{
              nombre: "Barcos en el mar",
              tamaño: "40 x 50 cm",
              precio: 200,
              id: 1,
              descripcion: "Cuadro impresionista, barco a vela navegando en calma mar.",
              imagen: barco
            },
            {
              nombre: "Las flores de mesa",
              tamaño: "30 x 40 cm",
              precio: 150,
              id: 2,
              descripcion: "Naturaleza muerta, flores vibrantes en elegante florero de madera.",
              imagen: flores
            },
            {
              nombre: "La persistencia",
              tamaño: "50 x 60 cm",
              precio: 250,
              id: 3,
              descripcion: "Explosión de color, vibrante mezcla de tonos y matices.",
              imagen: guitarra
            },
            {
              nombre: "Florero",
              tamaño: "20 x 25 cm",
              precio: 80,
              id: 4,
              descripcion: "Jardín floreciente, explosión de color en la naturaleza.",
              imagen: floreschicas
            },
            {
              nombre: "Mujer",
              tamaño: "60 x 70 cm",
              precio: 300,
              id: 5,
              descripcion: "Mujer surreal, melena rosa y celeste en ambiente onírico.",
              imagen: mujer
            },
            {
              nombre: "Las ovejas",
              tamaño: "35 x 45 cm",
              precio: 180,
              id: 6,
              descripcion: "Paisaje rural, suaves colinas, cielo azul y ovejas pastoriles.",
              imagen: ovejitas
            },
            {
              nombre: "Las costas",
              tamaño: "70 x 80 cm",
              precio: 350,
              id: 7,
              descripcion: "Costa escarpada, rocas bañadas por mar bravío y solitario.",
              imagen: paisaje
            },
            {
              nombre: "Stonehenge",
              tamaño: "50 x 70 cm",
              precio: 280,
              id: 8,
              descripcion: "Misterio ancestral, círculos de piedra y leyendas perdidas.",
              imagen: piedras
            },
            {
              nombre: "Las vacas",
              tamaño: "30 x 30 cm",
              precio: 120,
              id: 9,
              descripcion: "Paisaje campestre, serenas vacas pastando en prado verde",
              imagen:vacas
            },  {
              nombre: "Benecia",
              tamaño: "40 x 50 cm",
              precio: 200,
              id: 10,
              descripcion: "Encanto italiano, canal pintoresco y arquitectura histórica en Venecia.",
              imagen: benecia
            },
            {
              nombre: "Romeo y Juli",
              tamaño: "30 x 40 cm",
              precio: 150,
              id: 11,
              descripcion: "Amor trágico, romance prohibido en Verona renacentista.",
              imagen:europa
            },
            {
              nombre: "La manchas",
              tamaño: "50 x 60 cm",
              precio: 250,
              id: 12,
              descripcion: "Abstracción cromática, manchas y trazos de intenso colorido.",
              imagen:manchas
            }]);
          });
          
        ApiProductos.then(
            (response) => {
              setCuadros(response)
            }
            
          )
          .catch((error)=>{
            console.log("ta mal")
          })
      })
    return ( 
        <div className="itemh1">
            <h1>Bienvenido/a
            </h1>
            <div className="card-container">

                {cuadros.map((e)=> {
                    return(
                        <div className="card" key={e.Id}>
                        <img src={e.imagen} className="card-img-top" alt=""/>
                        <div className="card-body">
                        <h5 className="card-title">{e.nombre}</h5>
                        <p className="card-text">Descripción: {e.descripcion}</p>
                        <p className="card-text">Tamaño: {e.tamaño}</p>
                        <p className='card-text'>Precio: $ {e.precio}</p>
                        
                        {/* <a href="#" className="btn btn-primary">Comprar</a> */}
                        </div>
                        <Count initial={1} stock={10} onAdd={(quantity)=> console.log('Cantidad agregada ', quantity)}/>
                    </div>
                    )
                }
                )}
    </div>
        </div>
    )
    }
    export default ItemListContainer
