import React from "react";
import { Carousel, Spin, Card  } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "../components/Mos.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const Mos = () => {
  return (
    <div>
      <h1> Mos </h1>{" "}
      <Carousel afterChange={onChange}>
        <div>
          <h3> 1 </h3>{" "}
        </div>{" "}
        <div>
          <h3> 2 </h3>{" "}
        </div>{" "}
        <div>
          <h3> 3 </h3>{" "}
        </div>{" "}
        <div>
          <h3> 4 </h3>{" "}
        </div>{" "}
      </Carousel>{" "}
      <Spin indicator={antIcon} />{" "}
    </div>
  );
};

export default Mos;