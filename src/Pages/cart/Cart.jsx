import { Navbar } from '../navbar/Navbar';
import { Footer } from '../footer/Footer';
import './cart.css';
import '../index.css'

const Cart = () => {
    return (<>
        <Navbar />

        <main className="content">

            <h2 className="center">My Cart (2)</h2>

            <div className="card-disp-box">

                <div className="item-card">
                    <div className="card-imgbox">
                        <img className="card-img-cart" src="/assests/chess-book.jpeg" alt="chess-book" />
                    </div>
                    <div className="card-texts">
                        <h2>Strategic play</h2>
                        <div className="price-box">
                            Rs. 1717
                            <span className="m-btm"><strike> 2000</strike></span>
                            <span className="m-btm">50% off</span>

                            <div className="qty-box">
                                Quantity
                                <i className="fas fa-minus-circle"></i>
                                <input className="qty-bar" type="text" />
                                <i className="fas fa-plus-circle"></i>
                            </div>

                            <button className="btn-cart btn btn-warning">Remove From Cart</button>
                            <button className="btn-cart btn btn-light">Move to Wishlist</button>

                        </div>
                    </div>
                </div>

                <div className="order-summary">
                    <h2>Price Details</h2>
                    < hr />
                    <div className="item-cost-detail close">
                        <p>Strategic Play</p>
                        <p>Rs 1717</p>
                    </div>


                    <div className="item-cost-detail">
                        <p>Strategic Play</p>
                        <p>Rs 1717</p>
                    </div>

                    <hr />

                    <div className="item-cost-detail">
                        <h3>Total Price</h3>
                        <p>Rs 3434</p>
                    </div>

                    <button className="btn-cart btn btn-light">Proceed to Checkout</button>

                </div>

            </div>

        </main>

        <Footer />
    </>)
}

export { Cart }