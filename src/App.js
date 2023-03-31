import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import ItemListContainer from './componentes/itemListContainer/itemListContainer';
import Item from './componentes/Items/items';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting={'Bienvenido/a'}>
        
      </ItemListContainer>
      <Item></Item>
    </div>
  );
}

export default App;
