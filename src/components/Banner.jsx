import { Card, Flex, Typography } from "antd";
import FixAssets from "../assets/fix.png";
import Trace from "../assets/trace.png";
import Loct from "../assets/LOCT.png";
import Sga from "../assets/SGA.png";
import Faa from "../assets/FAA.png";
import React from "react";
import { FaA } from "react-icons/fa6";

function Banner() {
  const { Meta } = Card;
  const FixAssetsLink = import.meta.env.VITE_FIXASSETS;
  const TraceLink = import.meta.env.VITE_TRACEABILITY;
  const LoctLink = import.meta.env.VITE_LOCT;
  const SgaLink = import.meta.env.VITE_SGA;
  const FaaLink = import.meta.env.VITE_FAA;
  const naviage = (type) => {
    if (type == "fixassets") {
      window.location.href = FixAssetsLink;
    } else if (type == "traceability") {
      window.location.href = TraceLink;
    } else if (type == "LOCT") {
      window.location.href = LoctLink;
    } else if (type == "SGA") {
      window.location.href = SgaLink;
    } else if (type == "FAA") {
      window.location.href = FaaLink;
    }
  };
  const imageSize = {
    width: "240",
    height: "150",
  };
  const resetZIndex = () => {
    document.querySelectorAll(".card-content").forEach((card) => {
      card.style.zIndex = "1";
    });
  };

  const handleMouseEnter = (e) => {
    resetZIndex();
    e.currentTarget.style.transform = "scale(1.35)";
    e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)";
    e.currentTarget.style.zIndex = "10";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
    e.currentTarget.style.zIndex = "1";
  };
  const styleCardHover = {
    width: 240,
    transition: "transform 0.3s, box-shadow 0.3s",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  };
  return (
    <Card style={{ maxWidth: 1500 }}>
      <Flex gap="10px">
        {/* <Typography.Title level={3}>Hi </Typography.Title> */}
        <Card
          hoverable
          style={styleCardHover}
          cover={
            <img
              alt="example"
              src={FixAssets}
              width={imageSize.width}
              height={imageSize.height}
            />
          }
          onClick={() => naviage("fixassets")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Meta title="Fixed Assets System" description="Movement System" />
        </Card>
        <Card
          hoverable
          style={styleCardHover}
          cover={
            <img
              alt="example"
              src={Trace}
              width={imageSize.width}
              height={imageSize.height}
            />
          }
          onClick={() => naviage("traceability")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Meta title="Traceability System" description="Movement System" />
        </Card>
        <Card
          hoverable
          style={styleCardHover}
          cover={
            <img
              alt="example"
              src={Loct}
              width={imageSize.width}
              height={imageSize.height}
            />
          }
          onClick={() => naviage("LOCT")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Meta title="LOCT System" description="Movement System" />
        </Card>
        <Card
          hoverable
          style={styleCardHover}
          cover={
            <img
              alt="example"
              src={Sga}
              idth={imageSize.width}
              height={imageSize.height}
            />
          }
          onClick={() => naviage("SGA")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Meta title="SGA System" description="Movement System" />
        </Card>
      </Flex>
      <Flex gap="10px" style={{ marginTop: "10px" }}>
        <Card
          hoverable
          style={styleCardHover}
          cover={
            <img
              alt="example"
              src={Faa}
              idth={imageSize.width}
              height={imageSize.height}
            />
          }
          onClick={() => naviage("FAA")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Meta title="MGR FAA System" description="Movement System" />
        </Card>
      </Flex>
    </Card>
  );
}

export default Banner;
