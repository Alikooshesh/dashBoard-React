import React from "react";
import {IdashboardSmallCard} from "../../../../../interfaces";

const DashboardSmallCard:React.FC<IdashboardSmallCard> = (props) => {
    return (
        <div className={"w-1/5 bg-white p-1 rounded flex ring-1 ring-gray-200"}>
            <div className={`w-1/5 h-16 rounded mr-2 ${props.color}`}>
                {props.Icon}
            </div>

            <div className={"w-4/5 h-16"}>
                <p className={"font-bold text-gray-500"}>{props.title}</p>
                <p className={"text-2xl font-bold text-gray-600"}>{props.text}</p>
            </div>
        </div>
    )
}

export default DashboardSmallCard