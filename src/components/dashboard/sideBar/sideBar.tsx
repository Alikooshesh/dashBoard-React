import React from "react";
import {Link} from 'react-router-dom'
import { MdDashboard , MdAccountCircle , MdQuestionAnswer } from "react-icons/md";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {IsideBar} from "../../../interfaces";

const SideBar:React.FC<IsideBar> = (props)=> {
    return (

        <ProSidebar className={"w-full h-full"} collapsed={props.sideBarCollapsed}>
            <SidebarHeader>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<MdAccountCircle/>}>
                        Ali Kooshesh
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <Menu iconShape="square">
                <MenuItem icon={<MdDashboard />}>
                    Dashboard
                    <Link to={"/dashboard"}></Link>
                </MenuItem>

                <MenuItem icon={<MdQuestionAnswer />}>
                    Tickets
                    <Link to={"/dashboard/tickets"}></Link>
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default SideBar