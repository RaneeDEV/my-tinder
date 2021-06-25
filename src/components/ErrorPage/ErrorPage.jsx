import { Result, Button } from 'antd';
import { Link } from "react-router-dom";

export default function ErrorPage() {
   return (
   <>
   <Result
    status="404"
    title="404"
    subTitle="На жаль, відвідана вами сторінка не існує."
    extra={[
      <Button key="1">
        <Link to="/">На головну сторінку</Link>
      </Button>,
    ]}
  />
   </>
   )
}