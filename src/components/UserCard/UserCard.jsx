import "./UserCard.css";
import { Card, Button } from "antd";
import {
  RollbackOutlined,
  CloseOutlined,
  StarOutlined,
  HeartOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default function UserCard() {
  return (
    <>
      <Card
        hoverable
        style={{ width: 370 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="User Name, 25" description="user description" />
        <div className="container container__btn">
          <Button shape="circle" key="1" size={"large"} style={{ color: '#8c8c8c' }}>
            <RollbackOutlined />
          </Button>
          <Button shape="circle" key="2" size={"large"} style={{ color: '#ff4d4f' }}>
            <CloseOutlined />
          </Button>
          <Button shape="circle" key="3" size={"large"} style={{ color: '#faad14' }}>
            <StarOutlined />
          </Button>
          <Button shape="circle" key="4" size={"large"} style={{ color: '#08979c' }}>
            <HeartOutlined />
          </Button>
          <Button shape="circle" key="5" size={"large"} style={{ color: '#9254de' }}>
            <ThunderboltOutlined />
          </Button>
        </div>
      </Card>
    </>
  );
}
