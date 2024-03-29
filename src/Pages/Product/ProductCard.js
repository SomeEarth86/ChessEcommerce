import './product.css'
import '../index.css'
import { useProduct } from './Context-reducer/ProductContext'
import { useFilter } from './Context-reducer/FilterContext';
import {
    priceRangeFilter,
    sortData,
    sortStarRating,
    sortByCategory
} from '../utils/filterMethod';
import { useAuth } from './Context-reducer/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../utils/cartService';
import { addToWishlist, removeFromWishlist } from '../utils/wishlistService';

export const ProductCard = () => {
    const { ProductDetail: products } = useProduct();

    let localProdCopy = products;
    const { filterState, filterDispatch } = useFilter();
    const { authToken } = useAuth();
    const navigate = useNavigate();

    const { books, chess_set, wearable } = filterState.category

    const priceRangeProducts = priceRangeFilter(localProdCopy, filterState.priceRange);
    const sortDataProducts = sortData(priceRangeProducts, filterState.sortBy);
    const starRatingProducts = sortStarRating(sortDataProducts, filterState.rating);
    const sortCategoryProd = sortByCategory(starRatingProducts, books, chess_set, wearable);

    const cartHandler = async (e, product) => {
        if (!authToken)
            navigate("/login");
        else {
            if (e.target.innerText === 'Add To Cart') {
                const resp = await addToCart(authToken, product);
                filterDispatch({ type: "CART_OPERATION", payload: { cart: resp.cart } })
            }
            else
                navigate("/cart");
        }

    }

    const isItemUnderWishlist = (product) => {
        return filterState.wishlist.find((item) => product._id === item._id)
    }

    const wishlistHandler = async (product) => {
        if (!authToken)
            navigate("/login");
        else {
            let resp;
            if (isItemUnderWishlist(product))
                resp = await removeFromWishlist(product._id, authToken)
            else
                resp = await addToWishlist(authToken, product);
            filterDispatch({
                type: "WISHLIST_OPERATION",
                payload: { wishlist: resp.wishlist },
            })
        }
    }

    const toggleButtonText = (product) => {
        const filterItem = filterState.cart.filter(cartItem => cartItem._id === product._id)

        if (filterItem.length > 0)
            return "Go To Cart"
        else
            return "Add To Cart"
    }

    return (<>
        {sortCategoryProd.map((product) => {
            return <div key={product._id} className="ecom-card badge">
                <div className="image-box">
                    <img src={product.ImageSource} alt="prod-img" className="ecom-img" />
                    <i
                        className={`icon 
                        ${isItemUnderWishlist(product) ? "fas fa-heart" : "far fa-heart"}
                        `}
                        onClick={() => wishlistHandler(product)}
                    ></i>
                </div>

                <div className="card-detail">
                    <div className="title-rating">
                        <div className="heading">{product.title}
                        </div>

                    </div>

                    <small>{product.categoryName}</small>

                    <div className="price">₹{product.price}
                        <small className="star">
                            <p>{product.starRating}</p>
                            <i className="fas fa-star"></i>
                        </small>
                    </div>

                    <button
                        className="btn login"
                        onClick={(e) => cartHandler(e, product)}
                    >{toggleButtonText(product)}
                    </button>

                </div>

            </div>
        })
        }
    </>)
}
