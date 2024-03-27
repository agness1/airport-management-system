import { FC } from "react";
import { Link } from "react-router-dom";

const DashboardInterface: FC = () => {
return (
    <div className="min-h-screen bg-blue w-80 flex flex-col items-center gap-16 py-16">
<div className="bg-green w-full text-center text-white font-medium p-4 cursor-pointer">
    <Link to="/dashboard/flight-operator">
 <p className="hover:text-gray transition-all">Arrivals and Departures</p>
    </Link>

</div>
<div className="bg-green w-full text-center p-4 text-white font-medium cursor-pointer">
    <p className="hover:text-gray transition-all">Terminal</p>
</div>
<div className="bg-green w-full text-center p-4 text-white font-medium cursor-pointer">
    <p className="hover:text-gray transition-all">Ground</p>
</div>
    </div>
)

}

export default DashboardInterface
