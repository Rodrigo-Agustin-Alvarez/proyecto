import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import ItemListContainer from './componentes/itemListContainer/itemListContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom"
import QuienesSomos from './componentes/QuienesSomos/QS';




function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
