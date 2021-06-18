import { PageHeader, Button } from 'antd';
import './Header.css';

export default function Header() {
  return (
    <>
      <PageHeader
        ghost={false}
        title="Tinder Web App"
        className="header"
        extra={[
          <Button key="1">Login in</Button>,
          <Button key="2">Regestration</Button>
        ]}
      ></PageHeader>
    </>
  );
}
