import {Iroutes} from "../interfaces";
import DashboardMainPage from "../components/dashboard/main/mainComponents/dashboardMainPage/dashboardMainPage";
import TicketsMainPage from "../components/dashboard/main/mainComponents/ticketsMainPage/ticketsMainPage";

export const dashboardRoutes:Iroutes[] = [
    {path : "/dashboard" , exact:true , Component : DashboardMainPage},
    {path : "/dashboard/tickets" , exact:true , Component : TicketsMainPage},
]