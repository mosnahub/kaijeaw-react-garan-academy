import React from "react";
import { Card, Row, Col, Avatar, Divider } from "antd";
import "./Food.css";

const FoodCard = ({ foodItem }) => {
  return (
    <div>
      {console.log(foodItem)}
      {/* <Divider
        orientation="left"
        style={{ color: "#333", fontWeight: "normal" }}
      ></Divider> */}
      <Card>
        <Row justify="space-around" align="middle">
          <Col span={6}>
            <Avatar
              className="foodImg"
              shape="square"
              src={foodItem.imageUrl}
            />
          </Col>
          <Col span={6} className="info">
            <h3>{foodItem.name}</h3>
            <p>{foodItem.price}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FoodCard;