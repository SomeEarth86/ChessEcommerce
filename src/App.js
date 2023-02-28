import Mockman from 'mockman-js';
import { Routes, Route } from "react-router-dom"
import {
  Login, Signup, Cart,
  HomePage, ProductExplore, Wishlist, LandingPage
} from './Pages/index_page';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-explore' element={<ProductExplore />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />``
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/mockman' element={<Mockman />} />

      </Routes>


    </div>
  );
}

export default App;
