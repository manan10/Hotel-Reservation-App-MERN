import React, { Component } from "react";

import { Form, Input, Select, InputNumber, Button, Upload } from "antd";

import classes from "./AddRoom.module.css";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import axios from "../../../axios";

const { Option } = Select;

class AddRoom extends Component {
  onAddRoom = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category_id", data.category_id);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("image", data.image.file.originFileObj);

    if (this.props.location.state) {
      axios
        .post(
          "/rooms/" + this.props.location.state.data._id + "/edit-rooms",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          this.props.history.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .post("/rooms/add-room", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.props.history.replace("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    console.log(this.props.location.state);
  }

  render() {
    return (
      <Container className={classes.AddRoom}>
        <h1
          style={{
            fontFamily: "Bookman, URW Bookman L, serif",
            fontStyle: "italic",
          }}
        >
          {this.props.location.state ? "Edit Room" : "Add a new Room"}{" "}
        </h1>
        <hr></hr>
        <div className={classes.FormContainer}>
          <Form
            layout="vertical"
            autoComplete="off"
            initialValues={
              this.props.location.state ? this.props.location.state.data : null
            }
            onFinish={this.onAddRoom}
            wrapperCol={{ span: 12 }}
          >
            <Form.Item name="name" label="Name" className={classes.FormItem}>
              <Input />
            </Form.Item>

            <Form.Item
              name="category_id"
              label="Category"
              className={classes.FormItem}
            >
              <Select>
                <Option value="1">Single</Option>
                <Option value="2">Double</Option>
                <Option value="3">Family</Option>
                <Option value="4">Presidential</Option>
                <Option value="5">Suite</Option>
              </Select>
            </Form.Item>

            <Form.Item name="price" label="Price" className={classes.FormItem}>
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              className={classes.FormItem}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item name="image" label="Image" className={classes.FormItem}>
              <Upload>
                <Button> Click to Upload </Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                style={{ backgroundColor: "#3a405a", color: "white" }}
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Container>
    );
  }
}

export default withRouter(AddRoom);
