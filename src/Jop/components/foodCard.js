import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import "./food.css";

const FoodCard = ({ foodItem }) => {

  return (
    <div>
      {console.log(foodItem)}
      <Card style={{ width: "100%" }}>
        <Row align="middle">
          <Col className="foodPicCol" span={8}>
            <Avatar className="foodpic" src={foodItem.imageUrl} />
          </Col>
          <Col span={16}>
            <h3>{foodItem.name}</h3>
            <p>{foodItem.price} บาท</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FoodCard;
