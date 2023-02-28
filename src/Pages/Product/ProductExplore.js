import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { FilterDisplay } from "./Filters/FilterDisplay";
import '../index.css'
import './product.css';


const ProductExplore = () => {
    return (<>

        <Navbar />

        <div className="main-content">
            <FilterDisplay />
            <main className="products">
                <h3 className="marg-lef">Showing All products <span className="f-7">(showing 10 Products)</span></h3>

                <div className="card-disp">
                    <div className="ecom-card badge">
                        <div className="image-box ">
                            <img className="ecom-img" src="https://res.cloudinary.com/ducun9wpr/image/upload/v1676874543/Ecommerce/chess-book_fz29kv.jpg" alt="book-img" />
                            <i className="fas fa-heart icon"></i>
                        </div>
                        <div className="card-detail">
                            <div className="title-rating">
                                <div className="heading">Strategic play
                                </div>

                                <small className="star">
                                    <p>4.5</p>
                                    <i className="fas fa-star"></i>
                                </small>
                            </div>

                            <small>Book</small>
                            <div className="price">Rs. 1717</div>

                            <button className="btn login">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </main>
        </div>

        <Footer />
    </>
    )
}

export { ProductExplore }