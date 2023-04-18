import '../../css/style.css'
import "bootstrap/dist/css/bootstrap.min.css"


const Item = ({isSelected,children, onSelectedChange}) => {
    
    return  <div className='body-tienda'>
      {children}  
      </div>
      
          
}

export default Item;