import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Product/Context-reducer/AuthContext"
import './navbar.css'

export const Navbar = () => {

    const { authToken } = useAuth();
    const navigate = useNavigate();

    const isUserLoggedIn = (path) => {
        return authToken ? navigate(path) : navigate("/login");
    }

    return (<>
        <div className='main-container'>
            <Link to='/'>
                <div className="logo-title">ChessPlanet</div>
            </Link>

            <input type="text" placeholder='search' className='search' />

            <div className="right-nav">
                <Link to='/product-explore'>Product</Link>


                <i
                    className="far fa-heart fa-lg badge-nav"
                    onClick={() => isUserLoggedIn("/wishlist")}
                >
                    <span className="badge-num">5</span>
                </i>

                <i
                    className="fas fa-shopping-cart fa-lg badge-nav"
                    onClick={() => isUserLoggedIn("/cart")}
                >
                    <span className="badge-num">5</span>
                </i>

                <i
                    className="fas fa-user-astronaut fa-lg"
                    onClick={() => isUserLoggedIn("/profile")}
                ></i>

            </div>
        </div>
    </>)
}
