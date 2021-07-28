import React from "react";
import { MdMenu , MdSearch , MdNotificationsNone , MdMessage } from "react-icons/md";
import {Iheader} from "../../../interfaces";

const Header:React.FC<Iheader> = (props) => {

    function sideBarButtonClick() {
        props.sideBarCollapsed ? props.setSideBarCollapsed(false) : props.setSideBarCollapsed(true)
    }

    return(
        <header className={"w-full h-1/12 flex text-center"}>
            <div className={"w-2/4 flex justify-start content-center"}>
                <MdMenu className={"w-5 h-full cursor-pointer mr-3"} onClick={sideBarButtonClick}></MdMenu>
                <p className={"w-20 h-full cursor-pointer pt-1"}>Home</p>
                <p className={"w-20 h-full cursor-pointer pt-1 mr-3"}>About us</p>
                <div className={"w-72 h-full bg-gray-100 flex rounded p-2"}>
                    <input type={"text"} className={"w-11/12 h-5/6 bg-transparent border-transparent outline-none"}/>
                    <MdSearch className={"w-1/12 h-full cursor-pointer"}></MdSearch>
                </div>
            </div>
            <div className={"w-2/4 flex justify-end content-center pr-8"}>
                <div className={"w-7 h-full cursor-pointer flex relative mr-6"}>
                    <MdMessage className={"w-10/12 h-full absolute z-0"}></MdMessage>
                    <span className={"w-3/6 h-3/6 text-xs bg-yellow-600 text-gray-50 rounded z-50 ml-4 mt-3"}>5</span>
                </div>

                <div className={"w-7 h-full cursor-pointer flex relative"}>
                    <MdNotificationsNone className={"w-full h-full absolute z-0"}></MdNotificationsNone>
                    <span className={"w-3/6 h-3/6 text-xs bg-red-600 text-gray-50 rounded z-50 ml-4 mt-3"}>3</span>
                </div>
            </div>
        </header>
    )
}

export default Header