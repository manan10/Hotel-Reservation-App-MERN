import React, { Component } from 'react'
import axios from '../../axios'

import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import CartItems from '../../components/Cart/CartItems'
import { Button, message } from 'antd'

import classes from './Cart.module.css'
import { withRouter } from 'react-router-dom'

class Cart extends Component {

    state = {
        cartItems: [],
        orderAmount: 0,
        loaded: false,
    }

    getCartItems = () => {
        axios.post('/rooms/cart', {
            user: this.props.userId
        })
        .then((res) => {
            let amount = 0
            for(var i=0;i<res.data.checkout.length; i++) {
                console.log(res.data.checkout[i].price)
                amount += res.data.checkout[i].price
            }
            this.setState({ cartItems: res.data.checkout, loaded: true, orderAmount: amount })
        })
        .catch((err) => console.log(err))
        this.setState({ loaded: true })
    }

    componentDidMount() {
        this.getCartItems()
    }

    onRemoveFromCart = (cartItem) => {
        axios
            .post('/rooms/remove-from-cart/' + cartItem._id, {
                user: this.props.userId
            })
            .then((res) => this.getCartItems())
            .catch((err) => console.log(err))
    }

    onCheckout = () => {
        axios
            .post('/bookings/add-booking', { user: this.props.userId })
            .then((res) => {
                message.success("Checkout Complete. Your Order has been placed.")
                this.props.history.replace('/bookings')
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <Container style={{ padding: '50px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Bookman, URW Bookman L, serif' }}>
                    <h2 style={{ fontStyle: 'italic' }}>Your Cart</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h5 style={{ marginTop: '15px' }}>Order Total: <span style={{ color: 'green' }}>${this.state.orderAmount}</span> </h5>
                        <Button className={ classes.Btn } style={{ marginLeft: '100px', width: '150px' }} size="large" onClick={ this.onCheckout } disabled={ this.state.cartItems.length === 0}>Checkout</Button>
                    </div>
                </div>
                <hr className="mb-2"></hr>
                <div style={{ padding: '60px '}}>
                {
                    this.state.loaded === true  
                        ?   this.state.cartItems.length === 0 
                            ?   <p>No items in cart</p>
                            :   <CartItems cartItems={ this.state.cartItems } onRemove={ this.onRemoveFromCart } />
                        : null
                }
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.user.id  
    }
}

export default connect(mapStateToProps)(withRouter(Cart))
