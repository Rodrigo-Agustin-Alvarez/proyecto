import { useState,useEffect,useParams } from "react";
import Count from "../itemCount/Count";
import "bootstrap/dist/css/bootstrap.min.css";
import ApiProductos from "../itemListContainer/itemListContainer"



const VerDescripcion = () => {

    const [cuadros,setCuadros] = useState({});
    const {id} = useParams();

    useEffect(() => {
       ApiProductos(id)
       .then((data) => {
        setCuadros(data);
       })
       .catch((error)=>{
        console.log(error);
       });
    },[id]);

    const{nombre, descripcion, tamaño, precio, imagen } = cuadros

    return(
        <div className="card" key={id}>
            <img src={imagen} className="card-img-top" alt=""/>
            <div className="card-body">
             <h5 className="card-title">{nombre}</h5>
                        
            <p className="card-text">Descripción: {descripcion}</p>
            <p className="card-text">Tamaño: {tamaño}</p>
            <p className='card-text'>Precio: $ {precio}</p>
                        
            {/* <a href="#" className="btn btn-primary">Comprar</a> */}
             </div>
            <Count initial={1} stock={10} onAdd={(quantity)=> console.log('Cantidad agregada ', quantity)}/>
        </div>

    )

}

 export default VerDescripcion