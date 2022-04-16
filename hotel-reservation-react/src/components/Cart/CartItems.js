import React from 'react'
import CartItem from './CartItem/CartItem'

const CartItems = (props) => {
    return (
        <React.Fragment>
        {
            props.cartItems && 
                props.cartItems.map((cartItem) => {
                    return <CartItem key={cartItem._id} cartItem={cartItem} onRemove={props.onRemove} />
                })

        }
        </React.Fragment>
    )
}

export default CartItems
