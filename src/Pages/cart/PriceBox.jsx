import React from 'react'
import './cart.css'
import { useFilter } from '../Product/Context-reducer/FilterContext'

export const PriceBox = () => {
    const { filterState } = useFilter();
    const cartItem = [...filterState.cart];


    return (<>
        <div className="order-summary">
            <h2>Price Details</h2>
            < hr />
            {
                cartItem.map((item) => {
                    return <>
                        <div key={item._id} className="item-cost-detail">
                            <p>{item.title}{`(${item.qty} item)`}</p>
                            <p>₹ {item.price}</p>
                        </div>
                    </>
                })
            }

            <hr />

            <div className="item-cost-detail">
                <h3>Total Price</h3>
                <p>₹ {cartItem.reduce((acc, curr) => {
                    return acc + Number(curr.price) * Number(curr.qty);
                }, 0)}</p>
            </div>

            <button className="btn-cart btn btn-light check">Proceed to Checkout</button>

        </div>

    </>)
}