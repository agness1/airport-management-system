import { FC } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";

interface Data {
    onData:string
}

const AccessDeniedPage:FC<Data> = (props)  => {

return (
<div className="flex">
<DashboardInterface/>
<p className="w-1/2 m-auto text-3xl text-center font-medium">You don't have access to the panel because you are not logged in or don't have sufficient permissions. Access to this panel requires permissions as a {props.onData} or Administrator.</p>
</div>
)


 }

 export default AccessDeniedPage;
