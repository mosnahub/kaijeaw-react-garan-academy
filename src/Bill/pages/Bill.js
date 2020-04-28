import React from "react";
import { Row, Col } from "antd";
import FoodCard from "../components/FoodCard";

const FoodMenu = [
  {
    name: "ข้าวสวย",
    price: "10",
    pictureURL: "https://f.ptcdn.info/545/062/000/pn47qqiigF1vTLNmacW-o.jpg",
  },
  {
    name: "ไข่ดาว",
    price: "10",
    pictureURL:
      "https://manopas.com/wp-content/uploads/2014/09/%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%84%E0%B8%A3%E0%B9%89%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%83%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B9%80%E0%B8%A7%E0%B8%9F_1-800x597.jpg",
  },
  {
    name: "ต้มยำกุ้ง",
    price: "ราคา 50",
    pictureURL: "https://food.mthai.com/app/uploads/2016/10/Tomyum.jpg",
  },
  {
    name: "แกงเขียวหวาน",
    price: "ราคา 50",
    pictureURL:
      "https://lh3.googleusercontent.com/proxy/8EoUXGE_MJmggW8bC3Z9wTB3tPYbtk7K5oS7wWj64e3TXwT039iSRgFqd2m4M07pkonhYnwj9-og6CN6umGr_JFhjX9Mh738SXYrCPo5vLWEvTFSfGcrVB75Gb5QRx2cl41XC2dSfhYXNFD_flrgktxxJg",
  },
  {
    name: "แกงมัสมั่น",
    price: "ราคา 50",
    pictureURL:
      "https://img.wongnai.com/p/1920x0/2018/10/19/a67e7aeb0c0b462391961bddf7365225.jpg",
  },
  {
    name: "ไข่เจียว",
    price: "ราคา 30",
    pictureURL:
      "https://www.cpbrandsite.com/contents/tips_tricks/5184ebqiq8upocgoeiycl2tkpqvgoiztgdcguint.jpg",
  },
  {
    name: "แกงเห็ด",
    price: "ราคา 45",
    pictureURL:
      "https://www.matichon.co.th/wp-content/uploads/2019/08/IMG-4914.jpg",
  },
  {
    name: "แกงส้ม",
    price: "ราคา 45",
    pictureURL: "https://food.mthai.com/app/uploads/2013/07/10.jpg",
  },
  {
    name: "ข้าวผัดอเมริกัน",
    price: "ราคา 55",
    pictureURL: "https://i.ytimg.com/vi/g_NA5gCVopA/maxresdefault.jpg",
  },
];

const Bill = () => {
  return (
    <div>
      <h1>MENU</h1>
      <Row>
        {FoodMenu.map((menuItem, index) => (
          <Col lg={{ span: 6 }} xs={{ span: 24 }} key={index}>
            <FoodCard foodItem={menuItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Bill;
