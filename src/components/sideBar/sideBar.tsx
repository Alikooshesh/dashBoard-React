import React from "react";
import { MdDashboard , MdAccountCircle } from "react-icons/md";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar:React.FC = ()=> {
    return (

        <ProSidebar className={"w-full h-full"} collapsed={false}>
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
                </MenuItem>
            </Menu>
        </ProSidebar>
    )
}

export default SideBar