import React from "react";
import { Menu, Button, Row, Col } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import FoodCards from "../components/foodCards";

const { SubMenu } = Menu;

const foodMenu = [
  {
    name: "ข้าวเปล่า",
    price: "5",
    pictureURL: "https://img.kapook.com/u/surauch/cook1/mv.jpg",
  },
  {
    name: "ใข่เจียว",
    price: "10",
    pictureURL:
      "https://www.cpbrandsite.com/contents/tips_tricks/5184ebqiq8upocgoeiycl2tkpqvgoiztgdcguint.jpg",
  },
  {
    name: "ไข่เจียวหมูสับ",
    price: "15",
    pictureURL:
      "https://asset-apac.unileversolutions.com/content/dam/unilever/global/recipe_image/117/11786/117867-default.jpg/_jcr_content/renditions/cq5dam.web.800.600.jpeg",
  },
  {
    name: "ไข่ดาว",
    price: "10",
    pictureURL:
      "https://www.healthmedelivery.com/wp-content/uploads/2019/05/%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%94%E0%B8%B2%E0%B8%A7-1000x500-600x400.jpg",
  },
  {
    name: "ไข่คน",
    price: "15",
    pictureURL:
      "https://cache.gmo2.sistacafe.com/images/uploads/summary/image/22217/Perfect-Scrambled-Eggs-12.jpg",
  },
  {
    name: "ไข่ตุ๋น",
    price: "20",
    pictureURL: "https://food.mthai.com/app/uploads/2017/05/Steam-egg.jpg",
  },
  {
    name: "ไข่พะโล้",
    price: "20",
    pictureURL:
      "https://lh3.googleusercontent.com/proxy/v8gMzOwILAQdlTcQDBT62P7e9KZ5NCs3-lL9SKXtRhRD2Vu0g_l2HQm002WtoN1tU-eaHkeeHdx1iisL0gu1WpKaE2RaEV_A3X9sIDieqU1IvFZOHqQY86Y9zgAiA-WrqsNUTSsU",
  },
  {
    name: "ไข่ลูกเขย",
    price: "20",
    pictureURL: "https://i.ytimg.com/vi/NcxzhITLuYI/maxresdefault.jpg",
  },
  {
    name: "ไข่กระทะ",
    price: "25",
    pictureURL:
      "https://lh3.googleusercontent.com/proxy/KvdsrpjN0DteJiYOr6UaYWw4RkvqxNDlEs1wfKDKkDlgRBWKGcwD21K-CjE2UH8r_4RE_-5teoSXfb6m4vxZtn2s_sUd7asOg4HJD4HvmXaqw0WSexAUPUWkkSeV",
  },
];

const Tee = () => {
  return (
    <div>
      {console.log({ foodMenu })}
      <h1>Everything is kai but not the firstone</h1>
      <Row gutter={[16, 24]}>
        {foodMenu.map((menuItem, index) => (
          <Col lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }} key={index}>
            <FoodCards foodItem={menuItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Tee;
