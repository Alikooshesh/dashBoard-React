import React from "react";
import { MdSettingsApplications , MdShoppingCart , MdStore , MdPermIdentity } from "react-icons/md";
import DashboardSmallCard from "./dashboardSmallCard";
import DoughnutChart from "../../../charts/Doughnut";
import VerticalBar from "../../../charts/VerticalBar";

const DashboardMainPage:React.FC = () => {
    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-auto mb-4"}>
                <h1 className={"text-5xl"}>Dashboard</h1>
            </div>
            <div className={"w-full h-auto flex justify-between mb-3"}>
                <DashboardSmallCard Icon={<MdSettingsApplications className={"w-full h-full text-white"}></MdSettingsApplications>} title={"CPU Usage"} text={"10%"} color={"bg-blue-400"}/>
                <DashboardSmallCard Icon={<MdShoppingCart className={"w-full h-full text-white"}></MdShoppingCart>} title={"Sales"} text={"17"} color={"bg-yellow-400"}/>
                <DashboardSmallCard Icon={<MdStore className={"w-full h-full text-white"}></MdStore>} title={"Store Products"} text={"93"} color={"bg-green-400"}/>
                <DashboardSmallCard Icon={<MdPermIdentity className={"w-full h-full text-white"}></MdPermIdentity>} title={"New Users"} text={"118"} color={"bg-red-400"}/>
            </div>

            <div className={"w-full flex bg-white rounded p-5"}>
                <div className={"w-8/12 h-90 border-r-2 border-gray-200 flex justify-around content-center"}>
                    <p className={"text-2xl"}>Year's Sale</p>
                    <div className={"w-10/12 pt-5"}>
                        <VerticalBar/>
                    </div>
                </div>
                <p className={"text-2xl pl-5"}>Browsers</p>
                <div className={"w-4/12 h-90 justify-end pl-10"}>
                    <DoughnutChart/>
                </div>
            </div>

        </div>
    )
}

export default DashboardMainPage