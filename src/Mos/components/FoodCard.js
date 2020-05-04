import React from "react";
import { Card, Row, Col, Avatar, Divider } from "antd";
import "./Food.css";

const FoodCard = ({ foodItem }) => {
  return (
    <div>
      {console.log(foodItem)}
      <Card>
        <Row justify="space-around" align="middle">
          <Col span={10}>
            <Avatar
              className="foodImg"
              // shape="square"
              src={foodItem.imageUrl}
            />
          </Col>
          <Col span={14} className="info">
            <h3>{foodItem.name}</h3>
            <p>{foodItem.price}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FoodCard;
