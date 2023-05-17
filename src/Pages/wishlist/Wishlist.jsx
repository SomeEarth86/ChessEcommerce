import './wishlist.css';
// import '../index.css'
import { Footer } from '../footer/Footer'
import { Navbar } from '../navbar/Navbar'
import { useFilter } from '../Product/Context-reducer/FilterContext';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cartService';
import { removeFromWishlist } from '../utils/wishlistService';
import { useAuth } from '../Product/Context-reducer/AuthContext';

const Wishlist = () => {
    const { filterState, filterDispatch } = useFilter();
    const navigate = useNavigate();
    const { authToken } = useAuth();

    const toggleBtnText = (item) => {
        const itemAlreadyInCart = filterState.cart.filter((product) => product._id === item._id);

        return itemAlreadyInCart.length > 0 ? "Go To Cart" : "Add To Cart";
    }

    const cartHandlerWishlist = async (e, item) => {
        if (e.target.innerText === "Add To Cart") {
            const resp = await addToCart(authToken, item)
            filterDispatch({
                type: "CART_OPERATION",
                payload: { cart: resp.cart },
            })
        }
        else
            navigate("/cart");
    }

    const wishlistRemoveHandler = async (item) => {
        const resp = await removeFromWishlist(item._id, authToken);
        filterDispatch({
            type: "WISHLIST_OPERATION",
            payload: { wishlist: resp.wishlist },
        })
    }

    return (
        <>
            <Navbar />

            <main className="content">
                <h3 className='center'>My Wishlist</h3>
                <div className="wishlist-container">

                    {filterState.wishlist.length > 0 &&
                        [...filterState.wishlist].map((item) =>
                            <div key={item._id} className="ecom-card badge">
                                <div className="image-box ">
                                    <img className="ecom-img" src={item.ImageSource} alt="product-img" />
                                    <i
                                        className="fas fa-times-circle icon"
                                        onClick={() => wishlistRemoveHandler(item)}
                                    ></i>
                                </div>

                                <div className="card-detail">
                                    <div className="heading">{item.title}</div>
                                    <small>{item.categoryName}</small>
                                    <div className="price">{item.price}</div>

                                    <button
                                        className="btn login"
                                        onClick={(e) => cartHandlerWishlist(e, item)}
                                    >{toggleBtnText(item)}</button>
                                </div>
                            </div>
                        )
                    }

                    {
                        filterState.wishlist.length === 0 &&
                        <div>
                            <h3 className='center'>Wishlist is Empty, add some Products inside.</h3>

                            <div className='wish-empty'>
                                <i className="basket fa-10x fas fa-shopping-basket"></i>
                            </div>
                        </div>
                    }

                </div>
            </main>

            <Footer />
        </>
    )
}

export { Wishlist }