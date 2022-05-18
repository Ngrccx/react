import './App.css';
import Navbar from './components/Navbar';
import Productos from './components/Productos';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <ItemListContainer greetings='Hola Mundo'/>
      <div>
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
