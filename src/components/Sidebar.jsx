import { Flex, Menu } from "antd";
import React from "react";
import { FaLeaf } from "react-icons/fa6";
import PersonIcon from "@mui/icons-material/Person";
import LogoFullImg from "../assets/Fujikura.png";
import LogoCutimage from "../assets/FujikuraF.png";
import dashboard from "../assets/Dashboard.png";
import {
  UserOutlined,
  ProfileOutlined,
  LoginOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

function Sidebar({ collapsed, theme, pageChange }) {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          {/* <FaLeaf /> */}
          <img
            src={collapsed ? LogoCutimage : LogoFullImg}
            width={collapsed ? "40px" : "180px"}
            height="40px"
          />
        </div>
      </Flex>
      <Menu
        theme={theme == true ? "light" : "dark"}
        mode="inline"
        defaultSelectedKeys={["1"]}
        className="menu-bar"
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          { key: "2", icon: <ProfileOutlined />, label: "My Order" },
          { key: "3", icon: <LoginOutlined />, label: "To do" },
          { key: "4", icon: <OrderedListOutlined />, label: "Profile" },
          { key: "5", icon: <CarryOutOutlined />, label: "Setting" },
          { key: "6", icon: <SettingOutlined />, label: "Logout" },
        ]}
        onClick={(e) => pageChange(e.key)}
      />
    </>
  );
}

export default Sidebar;
