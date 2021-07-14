import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";
import SideBar from "./components/sideBar/sideBar";

function App() {


  return (
      <Router>
          <div className={"w-full h-full flex"}>
              <div className={"h-full mr-5"}>
                  <SideBar></SideBar>
              </div>

              <div className={"w-full p-4 pl-0 overflow-y-scroll"}>
                  <div className={"mb-4"}><Header></Header></div>
                  <Main></Main>
              </div>
          </div>
      </Router>
  );
}

export default App;
