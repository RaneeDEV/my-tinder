import { PageHeader, Button } from "antd";
import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <PageHeader
        ghost={false}
        title={[
          <Link to="/">Web Tinder</Link>
        ]}
        className="header"
        extra={[
          <Button key="1">
            <Link to="/login">Увійти</Link>
          </Button>,
        ]}
      ></PageHeader>
    </>
  );
}
