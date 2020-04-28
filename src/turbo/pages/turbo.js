import React from "react";
import FoodCard from "../components/foodcard";
import { Row, Col } from "antd";
const foodmenu = [
  {
    name: "ข้าวววว",
    price: "5",
    pictureURL:
      "https://www.simplyrecipes.com/wp-content/uploads/2020/02/HTC-White-Rice-Lead-4.jpg",
  },
  {
    name: "ไข่เยี่ยวม้า",
    price: "15",
    pictureURL: "https://mpics.mgronline.com/pics/Images/557000006524401.JPEG",
  },
  {
    name: "ไข่เค็ม",
    price: "10",
    pictureURL: "https://img.kapook.com/u/surauch/cook/SaltedEggs.jpg",
  },
  {
    name: "ไข่ดาว",
    price: "5",
    pictureURL: "https://cf.shopee.co.th/file/d292c5b589bb57c52e2c8b40c75b1598",
  },
  {
    name: "หมูหยอง",
    price: "5",
    pictureURL:
      "https://lh3.googleusercontent.com/proxy/Ndn7GRngvKP1QkUlRlP9djCl61I1TcOqlOvAThjbmIZwBnRG9ABhDFE79-9a-ibixkXpoFT2Bztsl7oyUGtJ1Geg8rcz7b5pKZ2vUCz1ZI2J9jFysS83VTKRUVDwHSXe7mteljAhlt1CQe5sUnBs7U-vk2mQxu3BpBWMnN5vzjXpc6FXwkuH7vsOYA",
  },
  {
    name: "ไข่เจียว",
    price: "10",
    pictureURL: "https://i.ytimg.com/vi/4wHvbMfVkNU/maxresdefault.jpg",
  },
  {
    name: "ต้มยํากุ้ง",
    price: "20",
    pictureURL:
      "https://sites.google.com/site/xaharthaiphakhklang/_/rsrc/1453299390625/tmya-kung/3354.jpg?height=277&width=400",
  },
  {
    name: "แกงกะทิ",
    price: "30",
    pictureURL: "https://img.kapook.com/u/2016/surauch/cOOK/curry1.jpg",
  },
  {
    name: "แกงป่า",
    price: "25",
    pictureURL:
      "https://s359.kapook.com/pagebuilder/ea894e14-f941-416e-a02a-089d8d9ea86b.jpg",
  },
  {
    name: "ไก่ทอดเกลือ",
    price: "20",
    pictureURL:
      "https://img-global.cpcdn.com/recipes/978219e773b2f779/751x532cq70/%E0%B8%A3%E0%B8%B9%E0%B8%9B-%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81-%E0%B8%82%E0%B8%AD%E0%B8%87-%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3-%E0%B8%9B%E0%B8%B5%E0%B8%81%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%97%E0%B8%AD%E0%B8%94%E0%B9%80%E0%B8%81%E0%B8%A5%E0%B8%B7%E0%B8%AD.jpg",
  },
];

const turbo = () => {
  return (
    <div>
      {console.log({ foodmenu })}
      <h1>Turbo Food Menu~~~~</h1>

      <Row>
        {foodmenu.map((menuItem, index) => (
          <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }} key={index}>
            <FoodCard foodItem={menuItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default turbo;
