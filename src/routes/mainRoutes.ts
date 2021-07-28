import {Iroutes} from "../interfaces";
import DashboardIndex from "../components/dashboard/dashboardIndex";

export const mainRoutes:Iroutes[] = [
    {path : "/dashboard" , exact:false , Component : DashboardIndex},
]