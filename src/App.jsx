import "./App.css";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import UserCard from "./components/UserCard/UserCard";
import { useAuth } from "./hooks/useAuth";
import { Spin } from "antd";
import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

// import { db } from "./firebase/firebase";
// import { modifyUser } from "./firebase/dbActions";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const auth = useAuth();
  // function fillDB() {
  //   let i = 0
  //   let timer = setTimeout(function tick (){
  //     i++;
  //     if(i == fakeUsers.length){
  //       return
  //     }
  //     // fakeUsers[i].email
  //     auth.signout()
  //     auth.signup(fakeUsers[i].email, fakeUsers[i].password).then((response) => {
  //       console.log(response);
  //         modifyUser(response.uid, fakeUsers[i])
  //         timer = setTimeout(tick, 1000);
  //     })
  //   }, 1000);
  //}
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          {auth.loading && (
            <div className="example">
              <Spin size="large" />
            </div>
          )}
          {auth.user && (
            <h1>
              {auth.user.uid} {auth.userData?.name}
            </h1>
          )}
          <div className="contant">
            <SideBar></SideBar>
            <div className="container">
              <UserCard></UserCard>
            </div>
          </div>
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/404">
          {/* <ErrorPage/> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
