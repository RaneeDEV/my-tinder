import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Input, Select, Tag, DatePicker, Spin } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import "./LoginPage.css";

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const options = [
  { value: "Автомобілі" },
  { value: "Астрономія" },
  { value: "Аерографія" },
];

function tagRender(props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 5 }}
    >
      {label}
    </Tag>
  );
}

export default function LoginPage() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rpass, setRpass] = useState("");
  const [type, setType] = useState("signin");
  function sign(e) {
    e.preventDefault();
    if (type === "signin") {
      auth.signin(email, pass);
    } else if (type === "signup") {
      auth.signup(email, pass);
    }
    setEmail("");
    setPass("");
    setRpass("");
  }
  function changeType() {
    if (type === "signin") {
      setType("signup");
    } else if (type === "signup") {
      setType("signin");
    }
  }
  return (
    <>
      <form onSubmit={sign} className="sign__form-wrapper">
        {auth.loading && (
          <div className="example">
            <Spin size="large"/>
          </div>
        )}
        <div className="sign__form-box">
          {type === "signup" ? <h2>Реєстрація</h2> : <h2>Увійти</h2>}
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Емейл"
            style={{ width: "25%" }}
            size="large"
          />
          <Input.Password
            placeholder="input password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
            placeholder="Пароль"
            style={{ width: "25%" }}
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>
        {type === "signup" && (
          <form onSubmit={sign} className="reg__form-wrapper">
            <Input.Password
              onChange={(e) => setRpass(e.target.value)}
              value={rpass}
              required
              placeholder="Підтвердіть пароль"
              style={{ width: "25%" }}
              size="large"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            <Select
              placeholder="Ім'я"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Адам">Адам</Option>
              <Option value="Андрій">Андрій</Option>
              <Option value="Арсен">Арсен</Option>
            </Select>
            <DatePicker
              placeholder="Дата Народження"
              size="large"
              style={{ width: "25%" }}
            />
            <Select
              placeholder="Країна"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="USA">USA</Option>
              <Option value="Ukraine">Ukraine</Option>
              <Option value="Russia">Russia</Option>
            </Select>
            <Select
              mode="multiple"
              showArrow
              placeholder="Інтереси"
              allowClear
              required
              tagRender={tagRender}
              style={{ width: "25%" }}
              size="large"
              options={options}
            />
            <Select
              placeholder="Освіта"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Вища">Вища</Option>
              <Option value="Середня">Середня</Option>
              <Option value="Базова">Базова</Option>
            </Select>
            <Select
              placeholder="Гендер"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Чоловік">Чоловік</Option>
              <Option value="Жінка">Жінка</Option>
              <Option value="Інше">Інше</Option>
            </Select>
            <Select
              placeholder="Індивідуальність"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Гетеро">Гетеро</Option>
              <Option value="Гомо">Гомо</Option>
              <Option value="Бі">Бі</Option>
            </Select>
            <Select
              placeholder="Показувати мене"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Жінкам">Жінкам</Option>
              <Option value="Чоловікам">Чоловікам</Option>
              <Option value="Усім">Усім</Option>
            </Select>
            <Select
              placeholder="Показувати мені"
              allowClear
              required
              style={{ width: "25%" }}
              size="large"
              onChange={handleChange}
            >
              <Option value="Жінок">Жінок</Option>
              <Option value="Чоловіків">Чоловіків</Option>
              <Option value="Усіх">Усіх</Option>
            </Select>
          </form>
        )}
        <div className="btns__wrap">
          <button type="submit" className="btn next-btn">
            Продовжити
          </button>
          <button
            type="button"
            className="btn btn__reg-sign"
            onClick={changeType}
          >
            {type === "signin" ? "Реєстрація" : "Увійти"}
          </button>
          {auth.user && (
            <button
              type="button"
              className="ant-btn"
              onClick={() => auth.signout()}
            >
              Вийти
            </button>
          )}
        </div>
      </form>
    </>
  );
}
