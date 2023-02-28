import { Footer } from '../footer/Footer'
import { Navbar } from '../navbar/Navbar'
import { Link } from "react-router-dom";
import '../index.css'

const HomePage = () => {
    return (
        <>
            <Navbar />

            <div className="hero-section badge">

                <img src="https://res.cloudinary.com/ducun9wpr/image/upload/v1676874544/Ecommerce/chess-banner_c8vpml.jpg" className="chessbg-img" alt="chess-bg-pic" />

                <div className="hero-overlay">
                    <h1 className="nav-heading">Welcome to ChessPlanet</h1>

                    <h3>Made for Chess Fanatics</h3>


                    <Link to='/product-explore' >
                        <button className="btn btn-outline outline-error">Shop Now</button>
                    </Link>

                </div>

            </div>

            <div className="category-div">

                <h1 className="center">We offer various Chess related products</h1>

                <div className="card-flexbox">

                    <div className="card1">
                        <img className="card-img" src="https://res.cloudinary.com/ducun9wpr/image/upload/v1676874543/Ecommerce/chess-book_fz29kv.jpg" alt="book" />

                        <Link to='/product-explore'>
                            <button className="btn login">Books</button>
                        </Link>

                    </div>

                    <div className="card1">
                        <img className="card-img" src="https://res.cloudinary.com/ducun9wpr/image/upload/v1676874543/Ecommerce/chess-hoodie_obqdfu.jpg" alt="book" />

                        <Link to='/product-explore'>
                            <button className="btn login">Wearables</button>
                        </Link>


                    </div>

                    <div className="card1">
                        <img className="card-img" src="https://res.cloudinary.com/ducun9wpr/image/upload/v1676874543/Ecommerce/chess-set1_p79iku.jpg" alt="book" />

                        <Link to='/product-explore'>
                            <button className="btn login">Chess Sets</button>
                        </Link>


                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export { HomePage };