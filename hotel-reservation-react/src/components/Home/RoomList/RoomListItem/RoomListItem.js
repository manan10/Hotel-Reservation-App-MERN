import React, { useState, useEffect } from 'react'
import { Col, Button } from 'antd'

import { Card } from "react-bootstrap";
import { connect } from "react-redux";

import classes from "./RoomListItem.module.css";
import { baseURL } from "../../../../backend";

const RoomListItem = (props) => {
    const [ inCart, setInCart ] = useState(false)

    const onBook = () => {
        setInCart(true)
        props.onBook(props.room)
    }

    useEffect(() => {
        // console.log(props.isAdmin)
        setInCart(props.cartItems.checkout ? checkIfInCart(props.cartItems.checkout, props.room) : false)
    }, [props.cartItems, props.room, props.isAdmin])

    const checkIfInCart = (cart, room) => {
        if(cart) {
            return false;
        } else {
            for(var x of cart) {
                if(x._id === room._id) {
                    return true
                }
            }
        }

        return false
    }

    return (
        <React.Fragment>
            {
                props.room.deleted 
                    ?   null
                    :               
                    <Col className="gutter-row mt-3" span={6}>
                    <Card className={ classes.Card }>
                      <Card.Img variant="top" src={ baseURL + props.room.image } alt={ props.room.name } className={classes.Image} />
                      <Card.Body className={classes.CardBody}>
                        <Card.Title>$ {props.room.price}/night </Card.Title>
                        <p>{ props.room.name }</p>
                        <Card.Text>{ props.room.description }</Card.Text>
                        {
                            props.isAdmin === false 
                            ?
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button type="primary" className={classes.Button} disabled={ !props.room.available || inCart } onClick={() => onBook(props.room)}> { inCart === true ? "Added To Cart" : "Book"  } </Button>
                                    { !props.room.available ? <Card.Text>SOLD OUT</Card.Text> : null }
                                </div>
                            :   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Button type="primary" className={classes.Button} onClick={() => props.onEdit(props.room)}>Edit</Button>
                                    <Button type="primary" className={classes.Button} onClick={() => props.onDelete(props.room)}>Delete</Button>
                                </div>    
                    }
                    </Card.Body>
                </Card> 
                </Col>
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
  return {
    isAdmin: state.user.isAdmin,
  };
};

export default connect(mapStateToProps)(RoomListItem);
