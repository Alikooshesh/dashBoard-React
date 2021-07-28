import React from "react";
import {RouteComponentProps} from "react-router";
import { MdSettingsApplications , MdShoppingCart , MdStore , MdPermIdentity } from "react-icons/md";
import DashboardSmallCard from "./dashboardSmallCard";
import DoughnutChart from "../../../charts/Doughnut";
import VerticalBar from "../../../charts/VerticalBar";

const DashboardMainPage = (props:RouteComponentProps) => {
    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-auto mb-4"}>
                <h1 className={"text-5xl"}>Dashboard</h1>
            </div>
            <div className={"w-full h-auto flex justify-between mb-4"}>
                <DashboardSmallCard Icon={<MdSettingsApplications className={"w-full h-full text-white"}></MdSettingsApplications>} title={"CPU Usage"} text={"10%"} color={"bg-blue-400"}/>
                <DashboardSmallCard Icon={<MdShoppingCart className={"w-full h-full text-white"}></MdShoppingCart>} title={"Sales"} text={"17"} color={"bg-yellow-400"}/>
                <DashboardSmallCard Icon={<MdStore className={"w-full h-full text-white"}></MdStore>} title={"Store Products"} text={"93"} color={"bg-green-400"}/>
                <DashboardSmallCard Icon={<MdPermIdentity className={"w-full h-full text-white"}></MdPermIdentity>} title={"New Users"} text={"118"} color={"bg-red-400"}/>
            </div>

            <div className={"w-full flex bg-white rounded p-5 mb-4 ring-1 ring-gray-200"}>
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

            <div className={"w-full bg-white rounded p-5 ring-1 ring-gray-200"}>
                <p className={"text-2xl"}>Last Orders</p>
                <table className={"w-full text-center"}>
                    <tr className={"border-b-2"}>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                    <tr>
                        <td>1286</td>
                        <td>TV LG-G800 21inch</td>
                        <td>120$</td>
                        <td>21 Jun 2021</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default DashboardMainPage