import React from 'react'
import './cart.css'
import { useFilter } from '../Product/Context-reducer/FilterContext'
import { useAuth } from '../Product/Context-reducer/AuthContext';
import { changeQtyCart, deleteCart } from '../utils/cartService';
import { addToWishlist } from '../utils/wishlistService';

export const CartItemList = () => {
    const { filterState, filterDispatch } = useFilter();
    const { authToken } = useAuth();

    const updateQty = async (item, type) => {
        let resp;

        if (type === 'increment')
            resp = await changeQtyCart(item._id, authToken, type);
        else {
            if (item.qty === 1)
                resp = await deleteCart(item._id, authToken)
            else
                resp = await changeQtyCart(item._id, authToken, type)
        }

        filterDispatch({
            type: "CART_OPERATION", payload: {
                cart: resp.cart
            }
        })
    }

    const removeItem = async (item) => {
        const resp = await deleteCart(item._id, authToken)

        filterDispatch({
            type: "CART_OPERATION", payload: {
                cart: resp.cart,
            }
        })
    }

    const cartWishlistHandler = async (item) => {

        const itemInWishlist = (item) => {
            return filterState.wishlist.find((wishlistItem) => item._id === wishlistItem._id)
        }

        if (!itemInWishlist(item)) {
            const wishResp = await addToWishlist(authToken, item);
            filterDispatch({
                type: "WISHLIST_OPERATION",
                payload: { wishlist: wishResp.wishlist },
            })
        }


        const cartResponse = await deleteCart(item._id, authToken)
        filterDispatch({
            type: "CART_OPERATION",
            payload: { cart: cartResponse.cart },
        })
    }

    return (<>
        {filterState.cart.length > 0 &&
            <div className='prod-list-vertical'>

                {[...filterState.cart].map((item) =>
                    item && (
                        <div key={item._id} className="item-card">
                            <div className="card-imgbox">
                                <img className="card-img-cart" src={item.ImageSource} alt="product-img" />
                            </div>
                            <div className="card-texts">
                                <h3>{item.title}</h3>
                                <div className="price-box">
                                    {item.price}

                                    <div className="qty-box">
                                        <i
                                            className="fas fa-minus-circle"
                                            onClick={() => updateQty(item, "decrement")}
                                        ></i>

                                        <span className="qty-bar">{item.qty}</span>
                                        <i
                                            className="fas fa-plus-circle"
                                            onClick={() => updateQty(item, "increment")}
                                        ></i>
                                    </div>

                                    <button
                                        className="btn-cart btn btn-warning red-clr"
                                        onClick={() => removeItem(item)}
                                    >Remove From Cart</button>
                                    <button
                                        className="btn-cart btn btn-light pur"
                                        onClick={() => cartWishlistHandler(item)}
                                    >Move to Wishlist</button>

                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        }


        {filterState.cart.length === 0 && (
            <div>
                <h2 className='center'>Cart is Empty, Add some item.</h2>
                <div className="icon-container">
                    <i className="fas fa-shopping-cart fa-10x empty-cart"></i>
                </div>
            </div>
        )}
    </>)
}
