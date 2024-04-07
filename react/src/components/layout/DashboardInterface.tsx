import { FC} from "react";
import { Link } from "react-router-dom";


const DashboardInterface: FC = () => {






return (
        <div className="min-h-screen  bg-green w-1/5 flex flex-col items-center gap-16 py-32">
        <div className="bg-blue w-10/12 rounded-2xl text-center text-white  font-medium p-4 cursor-pointer">
        <Link to="/dashboard/flight-operator" >
         <p className="hover:text-black transition-all text-lg ">Arrivals and Departures</p>
        </Link>

        </div>
        <div className="bg-blue w-10/12 rounded-2xl text-center p-4 text-white font-medium cursor-pointer">
            <Link to="/dashboard/terminal-menager" >
        <p className="hover:text-black transition-all text-lg ">Terminal</p>
            </Link>
        </div>
        <div className="bg-blue w-10/12 rounded-2xl text-center p-4 text-white font-medium cursor-pointer">
            <Link to="/dashboard/ground-menager">
        <p className="hover:text-black transition-all text-lg ">Ground</p>
            </Link>

        </div>
        </div>

)

}

export default DashboardInterface
