import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import QuienesSomos from './componentes/QuienesSomos/QS';
import VerDescripcion from './componentes/itemDescripcion/Descripcion';




function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
        <Route path='/Descripcion/:id' element={<VerDescripcion/>}/>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
