import './App.css';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import ItemListContainer from './containers/ItemListContainer';
import ItemCount from './components/ItemCount'

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
      <ItemListContainer greetings='Hola Mundo'/>
      <ItemCount stock='5' initial='1' />
      <div>
        item
        <Productos name='producto 1' value={1} />
      </div>
      <div>
        <Productos name='producto 2' value={2} />
      </div>
      <div>
        <Productos name='producto 3' value={3} />
      </div>
    </>
  );
}

export default App; 
