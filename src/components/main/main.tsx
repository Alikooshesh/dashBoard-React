import React from "react";
import DashboardMainPage from "./mainComponents/dashboardMainPage/dashboardMainPage";
import TicketsMainPage from "./mainComponents/ticketsMainPage/ticketsMainPage";

const Main:React.FC = () => {
    return (
        <main className={"w-full h-10/12 bg-gray-100 flex p-5"}>
            <TicketsMainPage></TicketsMainPage>
        </main>
    )
}

export default Main