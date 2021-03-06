import React from "react";
import { Card, Row, Col, Avatar } from "antd";  
import "./Food.css";

const FoodCards = ({foodItem}) => {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Row align="middle">
        <Col span={8}>
          <Avatar className="food-pic" src={foodItem.imageUrl} />
        </Col>
          <Col span={16}>
            <h3>&emsp; รายการ : {foodItem.name}</h3>
            <h4>&emsp; ราคา : {foodItem.price} บาท</h4>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default FoodCards;
