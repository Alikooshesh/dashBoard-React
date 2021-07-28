import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/dashboard/header/header";
import Main from "./components/dashboard/main/main";
import SideBar from "./components/dashboard/sideBar/sideBar";
import {mainRoutes} from "./routes/mainRoutes";
import PrivateRoute from "./components/privateRoute/privateRoute";
import {useDispatch, useSelector} from "react-redux";
import {login, logout} from "./redux/reducer/aouth.reducer/aouth.reducer";

function App() {

    const aouthUser = useSelector(state => state)
    const dispatch = useDispatch()

  return (
      <Router>
          <Switch>
              {mainRoutes.map(item => {
                  return (
                      <PrivateRoute key={item.path} path={item.path} exact={item.exact} Component={item.Component} loginreq={true}></PrivateRoute>
                  )
              })}
          </Switch>
      </Router>
  );
}

export default App;
