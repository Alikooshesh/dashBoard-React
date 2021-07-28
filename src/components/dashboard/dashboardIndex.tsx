import SideBar from "./sideBar/sideBar";
import Header from "./header/header";
import Main from "./main/main";
import React, {useState} from "react";

function DashboardIndex() {
    const [sideBarCollapsed , setSideBarCollapsed] = useState<boolean>(false)

    return(
        <div className={"w-full h-full flex"}>
            <div className={"h-full mr-5"}>
                <SideBar sideBarCollapsed={sideBarCollapsed} setSideBarCollapsed={setSideBarCollapsed}></SideBar>
            </div>

            <div className={"w-full p-4 pl-0 overflow-y-scroll"}>
                <div className={"mb-4"}><Header sideBarCollapsed={sideBarCollapsed} setSideBarCollapsed={setSideBarCollapsed}></Header></div>
                <Main></Main>
            </div>
        </div>
    )
}

export default DashboardIndex