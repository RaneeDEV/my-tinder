import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <>
      <Header></Header>
      <div className="contant">
        <SideBar></SideBar>
        <div className="container">
          <UserCard></UserCard>
        </div>
      </div>
    </>
  );
}

export default App;
