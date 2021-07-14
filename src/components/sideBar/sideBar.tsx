import React from "react";
import { MdDashboard , MdAccountCircle } from "react-icons/md";
import {ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideBar:React.FC = ()=> {
    return (
        // <div className={"w-full h-full bg-gray-600 text-gray-200"}>
        //     <div className={"w-full h-1/12 border-gray-200 border-b p-3 flex justify-center content-center"}>
        //         <div className={"w-1/6 h-full rounded"}>
        //             <img className={"w-full h-full rounded"} src={"https://www.lotus-qa.com/wp-content/uploads/2020/02/testing-psychology-300x286.jpg"}/>
        //         </div>
        //         <p className={"w-5/6 h-full pl-5 pt-3"}>Ali Kooshesh</p>
        //     </div>
        // </div>

        <ProSidebar className={"w-full h-full"} collapsed={false}>
            <SidebarHeader>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<MdAccountCircle />}>
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