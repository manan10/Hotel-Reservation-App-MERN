import React from "react";
import { Form, Select, Input } from "antd";
import { Button } from "antd";
import classes from "./SearchBar.module.css";

const { Option } = Select;

const SearchBar = (props) => {
  return (
    <Form
      autoComplete="off"
      layout="inline"
      onFinish={(values) => props.onFilter(values)}
    >
      <Form.Item name="category_id">
        <Select className={classes.Search} placeholder="Select Category">
          <Option value="1" className={classes.Search}>
            Single
          </Option>
          <Option value="2" className={classes.Search}>
            Double
          </Option>
          <Option value="3" className={classes.Search}>
            Family
          </Option>
          <Option value="4" className={classes.Search}>
            Presidential
          </Option>
          <Option value="5" className={classes.Search}>
            Suite
          </Option>
        </Select>
      </Form.Item>

      <Form.Item name="search">
        <Input className={classes.Search} placeholder="Search" />
      </Form.Item>

      <Form.Item>
        <Button className={classes.Btn} htmlType="submit">
          Search
        </Button>
      </Form.Item>

      <Form.Item>
        <Button className={classes.Btn} onClick={props.onRemoveFilter}>
          Remove Filter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SearchBar;
