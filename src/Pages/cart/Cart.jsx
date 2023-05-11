import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import './cart.css';
import { CartItemList } from './CartItemList';
import { PriceBox } from './PriceBox';
import { useFilter } from '../Product/Context-reducer/FilterContext';
// import '../index.css'

const Cart = () => {

    const { filterState } = useFilter();

    return (<>
        <Navbar />

        <main className="content">

            {filterState.cart.length > 0 && <h2 className="center">My Cart</h2>}
            <div className="card-disp-box">

                <CartItemList />

                {filterState.cart.length > 0 && < PriceBox />}

            </div>
        </main>

        <Footer />
    </>)
}

export { Cart }