import React from "react";
import { Row, Col } from "antd";
import "../components/Mos.css";
import FoodCard from "../components/FoodCard";

const foodMenu = [
  {
    name: "Steak",
    price: "$39.99",
    imageUrl:
      "https://www.thesteakhouseco.com/wp-content/uploads/2018/07/banner-blog-03.jpg",
  },
  {
    name: "Lasgna",
    price: "$48.43",
    imageUrl:
      "https://hips.hearstapps.com/vidthumb/images/180820-bookazine-delish-01280-1536610916.jpg?crop=1xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Nachos",
    price: "$32.65",
    imageUrl:
      "https://s23209.pcdn.co/wp-content/uploads/2020/01/Carne-Asada-NachosIMG_0445.jpg",
  },
  {
    name: "Pizza",
    price: "$19.99",
    imageUrl:
      "https://popmenucloud.com/cdn-cgi/image/width=1200,height=1200,fit=scale-down,format=auto/ztregbwc/206d05a5-ed88-49fd-adee-8863bc0e9cb4",
  },
  {
    name: "Spaghetti",
    price: "$11.54",
    imageUrl:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2Farchive%2F39ee03d747ff0e93c946bdaaf07320e7679f0287",
  },
  {
    name: "Tom Yum",
    price: "$10.12",
    imageUrl:
      "https://i2.wp.com/www.brasswok.com/wp-content/uploads/2015/12/Thai-Food-Tom-Yam-Kung-e1457481635537.jpg?resize=640%2C400&ssl=1",
  },
  {
    name: "Katsudon",
    price: "$14.59",
    imageUrl:
      "https://cooksmarts.imgix.net/meal_photos/844/20170306-Katsudon-NM-2.jpg?ixlib=rails-3.0.2&w=500&dpr=3",
  },
  {
    name: "Tonkotsu Ramen",
    price: "$15.59",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape.jpg?v=1562316760",
  },
  {
    name: "Yakisoba",
    price: "$13.49",
    imageUrl:
      "https://i1.wp.com/www.angsarap.net/wp-content/uploads/2019/12/Yakisoba-Wide.jpg?fit=1080%2C720&ssl=1&resize=1280%2C720",
  },
];

const Mos = () => {
  return (
    <div>
      {console.log({ foodMenu })}

      <Row>
        {foodMenu.map((item, index) => (
          <Col xs={24} sm={12} md={6} lg={6} xl={6} key={index}>
            <FoodCard foodItem={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Mos;
