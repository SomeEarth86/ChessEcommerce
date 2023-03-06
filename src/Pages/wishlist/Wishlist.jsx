import './wishlist.css';
// import '../index.css'
import { Footer } from '../footer/Footer'
import { Navbar } from '../navbar/Navbar'

const Wishlist = () => {
    return (
        <>
            <Navbar />

            <main className="content">
                <div className="wishlist-disp">
                    <div className="ecom-card badge">
                        <div className="image-box ">
                            <img className="ecom-img" src="/assests/chess-book.jpeg" alt="book-img" />
                            <i className="far fa-heart icon"></i>
                        </div>
                        <div className="card-detail">
                            <div className="heading">Strategic play</div>
                            <small>Book</small>
                            <div className="price">Rs. 1717</div>

                            <button className="btn login">Add to Cart</button>
                        </div>
                    </div>

                    <div className="ecom-card badge">
                        <div className="image-box ">
                            <img className="ecom-img" src="/assests/chess-book.jpeg" alt="book-img" />
                            <i className="far fa-heart icon"></i>
                        </div>
                        <div className="card-detail">
                            <div className="heading">Strategic play</div>
                            <small>Book</small>
                            <div className="price">Rs. 1717</div>

                            <button className="btn login">Add to Cart</button>
                        </div>
                    </div>

                    <div className="ecom-card badge">
                        <div className="image-box ">
                            <img className="ecom-img" src="/assests/chess-hoodie.jpeg" alt="book-img" />
                            <i className="far fa-heart icon"></i>
                        </div>
                        <div className="card-detail">
                            <div className="heading">Strategic play</div>
                            <small>Book</small>
                            <div className="price">Rs. 1717</div>

                            <button className="btn login">Add to Cart</button>
                        </div>
                    </div>

                    <div className="ecom-card badge">
                        <div className="image-box ">
                            <img className="ecom-img" src="/assests/chess-book.jpeg" alt="book-img" />
                            <i className="far fa-heart icon"></i>
                        </div>
                        <div className="card-detail">
                            <div className="heading">Strategic play</div>
                            <small>Book</small>
                            <div className="price">Rs. 1717</div>

                            <button className="btn login">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    )
}

export { Wishlist }