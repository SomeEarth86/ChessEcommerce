import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../Product/Context-reducer/AuthContext"
import './navbar.css'
import { useFilter } from "../Product/Context-reducer/FilterContext";

export const Navbar = () => {

    const { authToken } = useAuth();
    const navigate = useNavigate();
    const { filterState } = useFilter();

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
                    {authToken && filterState.wishlist.length > 0 && (

                        <span className="badge-num">{filterState.wishlist.length}</span>
                    )}
                </i>

                <i
                    className="fas fa-shopping-cart fa-lg badge-nav"
                    onClick={() => isUserLoggedIn("/cart")}
                >
                    {filterState.cart.length > 0 &&
                        <span className="badge-num">{filterState.cart.length}</span>
                    }
                </i>

                <i
                    className="fas fa-user-astronaut fa-lg"
                    onClick={() => isUserLoggedIn("/profile")}
                ></i>

            </div>
        </div>
    </>)
}
