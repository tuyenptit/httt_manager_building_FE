import { Outlet } from "react-router-dom";
import  { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const RootLayout = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height: "100vh", width: "100vw"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={menu => {
            navigate(menu.key)
          }}
          items={[
            {
              key: '/',
              icon: <UserOutlined />,
              label: 'Công ty',
            },
            {
              key: '/employees',
              icon: <VideoCameraOutlined />,
              label: 'Nhân viên',
            },
            {
              key: '/buildingemployees',
              icon: <UploadOutlined />,
              label: 'Nhân viên toà nhà',
            },
            {
              key: '/services',
              icon: <UploadOutlined />,
              label: 'Dịch vụ',
            },
            {
              key: '/access_log',
              icon: <UploadOutlined />,
              label: 'Ra vào toà nhà',
            },
            {
              key: '/service_usage',
              icon: <UploadOutlined />,
              label: 'Sử dụng dịch vụ',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, backgroundColor: "#fff"}}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 24,
            background: "#fff",
            borderRadius: 10,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;