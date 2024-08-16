import { LanTwoTone } from "@mui/icons-material";
import { Button, Card, Flex, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import CustomHeader from "./components/Header";
import MainContent from "./components/MainContent";
import SecondContent from "./components/SecondContent";
import "./App.css";

function App() {
  const { Sider, Content, Header } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(true);
  const [switchValue, setSwitchValue] = useState(true);
  const [page, setPage] = useState("2");
  const handleSwitchChange = (value) => {
    setSwitchValue(value);
  };

  const handlePageChange = (value) => {
    setPage(value);
  };
  const btnStyleOpen = {
    fontSize: "16px",
    width: "50px",
    height: "50px",
    position: "fixed",
    top: "10px",
    left: "200px",
    color: switchValue == false ? "white" : "#111d2c",
  };
  const btnStyleClose = {
    fontSize: "16px",
    width: "50px",
    height: "50px",
    position: "fixed",
    top: "10px",
    left: "90px",
    color: switchValue == false ? "white" : "#111d2c",
  };
  const contentMap = {
    1: <MainContent />,
    2: <SecondContent />,
    // 3: <TodoContent />,
    // 4: <ProfileContent />,
    // 5: <SettingContent />,
    // 6: <LogoutContent />,
  };
  return (
    <Layout className={switchValue === false ? "dark-theme" : ""} >
      <Sider
        theme={switchValue ? "light" : "dark"}
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
        onMouseEnter={() => hoverEnabled && setCollapsed(false)}
        onMouseLeave={() => hoverEnabled && setCollapsed(true)}
      >
       
          <Sidebar
            collapsed={collapsed}
            theme={switchValue}
            pageChange={handlePageChange}
          />
        
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{ background: switchValue == false ? "#001529" : "" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
              setCollapsed(!collapsed);
              setHoverEnabled(!hoverEnabled);
            }}
            style={collapsed ? btnStyleClose : btnStyleOpen}
          />
          <CustomHeader
            onSwitchChange={handleSwitchChange}
            theme={switchValue}
          />
        </Header>
        <Content className="content">
          <Flex gap="large"> {contentMap[page] || <MainContent />} </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
