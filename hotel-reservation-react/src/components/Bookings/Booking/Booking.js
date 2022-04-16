import { Button } from 'antd/lib/radio'
import React, { useState } from 'react'

import classes from './Booking.module.css'

const Booking = (props) => {
    const [ showDetails, setShowDetails ] = useState(false)
    let orderAmount = 0

    for(var i=0; i<props.booking.rooms.length; i++) {
        orderAmount += props.booking.rooms[i].price
    }
    
    return (
        <div className={ classes.Booking }>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <p>Booking ID: { props.booking._id } </p>
                    <p>{ new Date(props.booking.date).toLocaleDateString("en-us", { year: 'numeric', month: 'long', day: 'numeric' }) } </p>
                </div>

                <h5 style={{ color: '#29d629' }}>${ orderAmount } </h5>
            </div>
            <Button className={ classes.Button } onClick={ () => setShowDetails(!showDetails) }>{ showDetails ? "Hide Details" : "View Details" } </Button>
            <div className={ classes.Room }>
                {
                    showDetails ? 
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <p style={{ textDecoration: 'underline' }}>Room Name</p>
                            <p style={{ textDecoration: 'underline' }}>Price</p>
                        </div> : null
                }
            {
                showDetails ? 
                props.booking.rooms.map((room, i) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <p> #{ i } ) { room.name } </p>
                            <p style={{ color: '#29d629' }}> ${ room.price } </p>
                        </div>
                    )
                }) : null
            }
            </div>
        </div>
    )
}

export default Booking
