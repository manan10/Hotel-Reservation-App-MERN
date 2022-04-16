import axios from '../../axios'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import Booking from '../../components/Bookings/Booking/Booking'
import { withRouter } from 'react-router-dom'

class Bookings extends Component {

    state = {
        bookings: [],
        loaded: false,
    }

    componentDidMount = () => {
        axios
            .get('/bookings/' + this.props.user)
            .then((res) => {
                this.setState({ bookings: res.data, loaded: true })
            })
            .catch((err) => console.log(err))
    }
    
    render() {
        return (
            <Container style={{ padding: '50px'}}>
                <h2 style={{ fontStyle: 'italic', fontFamily: 'Bookman, URW Bookman L, serif' }}>Your Bookings</h2>
                <hr className="mb-2"></hr>

                <div style={{ padding: '60px' }}>
                {
                    this.state.loaded === true  
                        ?   this.state.bookings.length === 0 
                            ?   <p>No previous bookings</p>
                            :   this.state.bookings.map((booking) => {
                                    return <Booking booking={ booking } />
                                })
                        : null
                }
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.id,
        isAdmin: state.user.isAdmin
    }
}

export default connect(mapStateToProps)(withRouter(Bookings))
