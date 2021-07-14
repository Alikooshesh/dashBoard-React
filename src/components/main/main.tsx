import React from "react";
import DashboardMainPage from "./mainComponents/dashboardMainPage/dashboardMainPage";

const Main:React.FC = () => {
    return (
        <main className={"w-full h-10/12 bg-gray-100 flex p-5"}>
            <DashboardMainPage></DashboardMainPage>
        </main>
    )
}

export default Main