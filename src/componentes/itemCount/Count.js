import { useState } from "react"
import '../../css/style.css'

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
            <button className="menos" onClick={decrement}>-</button>
            <div>
            <button className="añadir" onClick={()=> onAdd(quantity)}disabled={!stock}>Agregar al carrito</button>
            </div>
            <button className="mas" onClick={increment}>+</button>          
            </div>
        </div>
    ) 
}

export default Count