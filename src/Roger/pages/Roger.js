import React from "react";
import FoodCard from "../components/foodCard";
import { Row, Col } from "antd";

const foodMenu = [
  {
    name: "ข้าวเปล่า",
    price: "2000",
    pictureURL:
      "https://hilight.kapook.com/img_cms2/user/settawoot/settawoot/new/new1/600_6.jpg",
  },
  {
    name: "ข้าวไข่ข้นต้มยำทะเล",
    price: "350000",
    pictureURL:
      "https://1.bp.blogspot.com/-TiZ2WCz8POI/WNSxtRJs9sI/AAAAAAAACC8/GAsxMTS_qwoQ9VnTvAH_bZhV55OxoXRrgCLcB/s1600/1.jpg",
  },
  {
    name: "ข้าวไข่ข้นแกงเขียวหวาน",
    price: "350000",
    pictureURL:
      "data:image/jpeg;base64,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",
  },
  {
    name: "ไข่ตุ๋น",
    price: "280000",
    pictureURL:
      "https://scm-assets.constant.co/scm/unilever/e9dc924f238fa6cc29465942875fe8f0/78849a23-3925-4621-a018-9b9d6dfc8809.jpg",
  },
  {
    name: "ไข่ต้ม",
    price: "780000",
    pictureURL:
      "https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2019/03/5c7d11c86ab96_5c7d116c264a1_1603861480.jpeg",
  },
  {
    name: "ไข่มดแดง",
    price: "200",
    pictureURL:
      "https://img.wongnai.com/p/1920x0/2018/05/01/f1ac1d67da78428ba71f5fe4ec8b3ea1.jpg",
  },
  {
    name: "ยำไข่ยางมะตูม",
    price: "500000",
    pictureURL: "https://www.maeban.co.th/upfiles/blog/15-12-15-3-60s.jpg",
  },
  {
    name: "ยำไข่ดาว",
    price: "340000",
    pictureURL:
      "https://i0.wp.com/goodlifeupdate.com/app/uploads/2019/06/%E0%B8%A2%E0%B8%B3%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%94%E0%B8%B2%E0%B8%A7-web.jpg",
  },
  {
    name: "ไข่กระทะ",
    price: "920123",
    pictureURL:
      "https://my.kapook.com/imagescontent/fb_img/780/s_178246_2571.jpg",
  },
];

const Roger = () => {
  return (
    <div>
      {console.log({ foodMenu })}
      <h1>Mr.Pond Chafe Table</h1>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {foodMenu.map((menuItem, index) => (
          <Col lg={{ span: 6 }} md={{ span: 12 }} xs={{ span: 24 }} key={index}>
            <FoodCard foodItem={menuItem} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Roger;
