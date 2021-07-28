import React from "react";
import {RouteComponentProps} from 'react-router-dom'

const TicketsMainPage= (props:RouteComponentProps) => {
    return (
        <div className={"w-full h-full"}>
            <div className={"w-full h-auto mb-4 flex justify-start content-center"}>
                <h1 className={"text-5xl"}>Tickets</h1>
                <button className={"bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded ml-4 mt-2"}>New Ticket</button>
            </div>

            <div>
                <table className={"w-full text-center"}>
                    <tr className={"border-b-2"}>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td className={"text-blue-500"}><a href={"#"}>Broken Order</a></td>
                        <td>Wating ...</td>
                        <td>21 Jul 2021</td>
                    </tr>
                    <tr>
                        <td className={"text-blue-500"}><a href={"#"}>Change Email</a></td>
                        <td className={"text-green-500"}>Answered</td>
                        <td>21 Jul 2021</td>
                    </tr>
                    <tr>
                        <td className={"text-blue-500"}><a href={"#"}>Server down</a></td>
                        <td className={"text-green-500"}>Answered</td>
                        <td>21 Jul 2021</td>
                    </tr>
                    <tr>
                        <td className={"text-blue-500"}><a href={"#"}>need support</a></td>
                        <td>Closed</td>
                        <td>21 Jul 2021</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TicketsMainPage