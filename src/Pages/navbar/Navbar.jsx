import { Link } from "react-router-dom"
import './navbar.css'

export const Navbar = () => {
    return (<>
        <div className='main-container'>
            <Link to='/'>
                <div className="logo-title">ChessPlanet</div>
            </Link>

            <input type="text" placeholder='search' className='search' />

            <div className="right-nav">
                <Link to='/product-explore'>Product</Link>

                <Link to='/wishlist' className="badge-nav">
                    <i className="far fa-heart fa-lg"></i>
                    <span className="badge-num">35</span>
                </Link>

                <Link to='/cart' className='badge-nav'>
                    <i className="fas fa-shopping-cart fa-lg"></i>
                    <span className="badge-num">5</span>
                </Link>

                <Link to='/login'>
                    <i className="fas fa-user-astronaut fa-lg"></i>
                </Link>
            </div>
        </div>
    </>)
}
