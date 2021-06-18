import "./SideBar.css";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export default function SideBar() {
  return (
    <>
      <Sider
        trigger={null}
        theme="light"
        collapsible
        width={250}
        style={{
          height: "100vh",
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="sidebar__header-menu"
        >
          <Menu.Item key="1">Matches</Menu.Item>
          <Menu.Item key="2">Messages</Menu.Item>
        </Menu>
        <Menu mode="inline">
          
          <Menu.Item key="1" icon={<UserOutlined />}>
            User 1
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            User 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            User 3
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            User 4
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            User 5
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
