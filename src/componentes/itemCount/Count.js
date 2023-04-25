import { useState } from "react"
import '../../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"

const Count = ({stock,initial,onAdd}) => {
    const [quantity,setQuantity] = useState(initial)
    const increment = () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const decrement = () =>{
        if(quantity>1) {
            setQuantity(quantity - 1)
        }
    }
    return(
        <div className="box-count">
             <h4 className="h4number">{quantity}</h4>
            <div className="box-flex">
            <button className="btn btn-outline-primary menos" type="button" onClick={decrement}>-</button>
            <div>
            <button className="btn btn-primary" type="button" onClick={()=> onAdd(quantity)}disabled={!stock}>Agregar al carrito</button>
            </div>
            <button className="btn btn-outline-primary mas" type="button" onClick={increment}>+</button>          
            </div>
        </div>
    ) 
}

export default Count