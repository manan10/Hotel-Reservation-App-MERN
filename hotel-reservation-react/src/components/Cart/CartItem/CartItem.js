import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'

import classes from './CartItem.module.css'

import { baseURL } from '../../../backend'

const CartItem = (props) => {
    return (
        <Container className={ classes.CartItem } fluid>
            <div>
                <img  className={ classes.Image } src={ baseURL + props.cartItem.image } alt={ props.cartItem.name } style={{ width: '250px' }} />
            </div>
            <div style={{ marginLeft: '60px' }}>
                <h2 style={{ color: 'white'}}> { props.cartItem.name } </h2>
                <h5 style={{ color: 'white'}}> ${ props.cartItem.price }/night </h5>
                <p> { props.cartItem.description } </p>
                <Button className={ classes.Btn } onClick={ () => props.onRemove(props.cartItem) }>Remove From Cart</Button>
            </div>

        </Container>
    )
}

export default CartItem
