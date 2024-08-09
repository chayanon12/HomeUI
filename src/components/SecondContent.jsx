import { Card, Flex, Typography } from "antd";
import FixAssets from "../assets/fix.png";
import Trace from "../assets/trace.png";
import Loct from "../assets/LOCT.png";
import Sga from "../assets/SGA.png";
import React from "react";

function SecondContent() {
  return (
    <Card style={{ maxWidth: 1500, width: 1500, height: 500 }}>
      <Flex gap="10px">
        <Typography.Title level={1}>Hi </Typography.Title>
      </Flex>
    </Card>
  );
}

export default SecondContent;
