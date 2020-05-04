import React from "react";
import { Rate, Row, Col } from "antd";
import FoodCards from "../components/FoodCard";

const foodMenu = [
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
];

const Zee = () => {
  return (
    <div>
      {console.log({ foodMenu })}

      <Rate />
      <Row gutter={[16, 16]}>
        {foodMenu.map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} key={index}>
            <FoodCards foodItem={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Zee;
