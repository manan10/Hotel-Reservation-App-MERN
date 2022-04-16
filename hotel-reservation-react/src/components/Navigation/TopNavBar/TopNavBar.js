import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../../store/actions/index";

const TopNavBar = (props) => {
  const logout = () => {
    props.logout();
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{ boxShadow: "0px 3px #3A405A", backgroundColor: "#3A405A" }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontFamily: "Brush Script MT, Brush Script Std, cursive",
            fontSize: "40px",
          }}
        >
          The Atlantic
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav
            className="justify-content-end"
            style={{ fontSize: "20px", color: "white" }}
          >
            <Nav.Link href="/">Home</Nav.Link>
            {
              !props.userId
                ? <Nav.Link href="/login">Sign-In</Nav.Link>
                : props.isAdmin === true  
                  ?  <NavDropdown
                        title={ props.username }
                        id="basic-nav-dropdown">
                          <NavDropdown.Item onClick={ logout } >Logout</NavDropdown.Item>
                      </NavDropdown>
                  :   <NavDropdown
                        title={ props.username }
                        id="basic-nav-dropdown">
                          <NavDropdown.Item href="/bookings">
                            My Bookings
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/cart">Cart</NavDropdown.Item>
                          <NavDropdown.Item href="/" onClick={logout}>
                            Logout
                          </NavDropdown.Item>
                      </NavDropdown>
                

            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    username: state.user.username,
    isAdmin: state.user.isAdmin
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logoutUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(withRouter(TopNavBar));
