import Mockman from 'mockman-js';
import { Routes, Route } from "react-router-dom"
import {
  Login, HomePage, Signup, Cart,
  ProductExplore, Wishlist, Logout, Profile,
} from './Pages/index_page';
import { useAuth } from './Pages/Product/Context-reducer/AuthContext';


function App() {
  const { authToken } = useAuth();

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
        <Route path='/logout' element={<Logout />} />
        {authToken && <Route path='/profile' element={<Profile />} />}

      </Routes>


    </div>
  );
}

export default App;
