
import './App.css';
import InputProduct from './pages/components/InputProduct';
import ListRender from './pages/components/ListRender';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import EditProduct from './pages/EditProduct/EditProduct';

//hook


function App() {
  return (
    <div className="App">
      
      <CreateProduct/>
      <EditProduct/>
      <ListRender/>
    </div>
  );
}

export default App;
