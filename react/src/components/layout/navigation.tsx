import { FC } from "react";
//import { Link } from "react-router-dom";

const Navigation: FC = () => {
    return (
        <nav className="h-14 bg-black flex items-center justify-end">
            <div className="flex  gap-8 mx-32 items-center text-white font-medium ">
<p className="hover:text-green transition-colors cursor-pointer">Login</p>
                <p className="hover:text-green transition-colors cursor-pointer">Register</p>
            </div>
        </nav>
    );
};
export default Navigation;



/*
<Link to="/dashboard"> <p className="hover:text-green transition-colors cursor-pointer">Login</p> </Link>

*/
