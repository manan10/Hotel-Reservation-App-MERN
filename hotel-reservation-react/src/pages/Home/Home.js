import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { Button } from "antd";

import axios from "../../axios";

import RoomList from "../../components/Home/RoomList/RoomList";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import classes from "./Home.module.css";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    allrooms: null,
    rooms: null,
    cartItems: [],
    isAdmin: true,
  };

  componentDidMount = () => {
    if(this.props.userId === null) {
      this.setState({
        isAdmin: false
      })
    } else if(this.props.isAdmin === false) {
      this.setState({ isAdmin: false })
    }
     
    this.setState({})
    axios.get("/rooms/").then((res) => {
      this.setState({
        rooms: res.data,
        allrooms: res.data,
      });
    });

    if (this.props.isAdmin) {
        axios.post("/rooms/cart", { user: this.props.userId }).then((res) => {
            this.setState({ cartItems: res.data })
        });
    }
  };

  onEditHandler = (room) => {
    this.props.history.replace("/add-room", {
      data: room,
      mode: "edit",
    });
  };

  onDeleteHandler = (room) => {
    axios
      .get("/rooms/" + room._id + "/delete-rooms")
      .then((res) => {
        axios.get("/rooms/").then((res) => {
          console.log(res.data);
          this.setState({
            allrooms: res.data,
            rooms: res.data,
          });
        });
      })
      .catch((err) => console.log(err));
  };

  onBookHandler = (room) => {
    if (this.props.userId) {
      axios
        .post("/rooms/add-to-cart/" + room._id, {
          user: this.props.userId,
        })
        .then((res) => {});
    } else {
      this.props.history.replace("/login");
    }
  };

  onAddRoomHandler = () => {
    this.props.history.replace("add-room");
  };

  onFilter = (values) => {
    let filteredRooms = [];

    this.state.allrooms.forEach(function (room) {
      if (!values.category_id & !values.search) {
        filteredRooms = this.state.allrooms;
      } else if (!values.category_id) {
        if (room.name.includes(values.search)) {
          filteredRooms.push(room);
        }
      } else if (!values.search) {
        if (room.category_id === parseInt(values.category_id)) {
          filteredRooms.push(room);
        }
      } else {
        if (
          room.category_id === parseInt(values.category_id) &&
          room.name.includes(values.search)
        ) {
          filteredRooms.push(room);
        }
      }
    });

    this.setState({
      rooms: filteredRooms,
    });
  };

  onRemoveFilter = () => {
    this.setState({
      rooms: this.state.allrooms,
    });
  };

  render() {
    return (
      <Container fluid className={classes.Home}>
        {this.props.isAdmin === true ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "right",
            }}
          >
            <Button className={classes.Btn} onClick={this.onAddRoomHandler}>
              Add Room
            </Button>
            <SearchBar
              onFilter={this.onFilter}
              onRemoveFilter={this.onRemoveFilter}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "right",
            }}
          >
            <h1
              style={{
                fontFamily: "Bookman, URW Bookman L, serif",
                fontStyle: "italic",
                color: "#3a405a",
              }}
            >
              Choose Your Room
            </h1>
            <SearchBar
              onFilter={this.onFilter}
              onRemoveFilter={this.onRemoveFilter}
            />
          </div>
        )}
        <hr className="mb-4"></hr>
        {this.state.rooms ? (
          <div className="mt-5">
            <RoomList
              rooms={this.state.rooms}
              onEdit={this.onEditHandler}
              onDelete={this.onDeleteHandler}
              onBook={this.onBookHandler}
              isAdmin={ this.props.isAdmin }
              itemsPerPage={4}
              cartItems={this.state.cartItems}
            />
          </div>
        ) : (
          <div style={{ minHeight: "200px" }}>
            <p className="text-center text-muted m-5">No rooms found.</p>
          </div>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.user.id,
    isAdmin: state.user.isAdmin,
  };
};

export default connect(mapStateToProps, null)(withRouter(Home));
