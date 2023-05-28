import './App.css';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Cart from './components/screens/Cart';
import Signup from './components/screens/Signup';


import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from './components/ContextReducer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import MyOrder from './components/screens/MyOrder';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/creatuser' element={<Signup />} />
            <Route exact path='/myOrder' element={<MyOrder />} />
            {/* <Route exact path='/cart' element={<Cart />} /> */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

