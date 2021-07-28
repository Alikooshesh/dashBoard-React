import React from "react";
import DashboardMainPage from "./mainComponents/dashboardMainPage/dashboardMainPage";
import TicketsMainPage from "./mainComponents/ticketsMainPage/ticketsMainPage";
import {Route, Switch} from "react-router-dom";
import {dashboardRoutes} from "../../../routes/dashboardRoutes";

const Main:React.FC = () => {
    return (
        <main className={"w-full h-10/12 bg-gray-100 flex p-5"}>
            <Switch>
                {dashboardRoutes.map(item => {
                    return (
                        <Route key={`${item.path}-dashboard`} path={item.path} exact={item.exact} render={props => <item.Component {...props}></item.Component>}></Route>
                    )
                })}
            </Switch>
        </main>
    )
}

export default Main