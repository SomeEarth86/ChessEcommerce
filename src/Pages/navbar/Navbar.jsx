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
                    <i class="far fa-heart fa-lg"></i>
                    <span class="badge-num">35</span>
                </Link>

                <Link to='/cart' className='badge-nav'>
                    <i class="fas fa-shopping-cart fa-lg"></i>
                    <span class="badge-num">5</span>
                </Link>

                <Link to='/login'>
                    <i class="fas fa-user-astronaut fa-lg"></i>
                </Link>
            </div>
        </div>
    </>)
}
