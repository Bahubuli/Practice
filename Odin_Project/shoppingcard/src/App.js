
import './App.css';

import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import ProductsPage from './components/ProductsPage';
import Cart from './components/Cart';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <div className = "container">
                <Navbar/>

                <Routes>
                    <Route path = '/' element = {<ProductsPage/>}/>
                    <Route path = '/cart' element = {<Cart/>} />
                    <Route path = '/product' element = {<ProductDetails/>} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
