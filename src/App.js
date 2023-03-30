
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ProductRoutes from './pages/Routes/ProductRoutes';

//hook
function App() {
  return (
    <div className="App">
     
     <ProductRoutes/>

    </div>
  );
}

export default App;
