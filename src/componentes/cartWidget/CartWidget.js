import cart from './assets/shopping-cart-svgrepo-com.svg'
import '../../css/style.css'
const CartWidget = () => {
    return(
        <div>
            <img className='img-carrito' src={cart} alt='cart-widget'></img>
            0
        </div>
    )
}

export default CartWidget