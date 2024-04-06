import { FC } from "react";

const Navigation: FC = () => {
    return (
        <div className="h-14 w-4/5 absolute right-0  bg-black flex items-center justify-end">
            <div className="flex  gap-8 mx-32 items-center text-white font-medium">
<a href="/dashboard" className="hover:text-green transition-colors cursor-pointer">Login</a>
                <p className="hover:text-green transition-colors cursor-pointer">Register</p>
                <a href="/" className="hover:text-green transition-colors cursor-pointer">Home Page</a>
            </div>
        </div>
    );
};
export default Navigation;
