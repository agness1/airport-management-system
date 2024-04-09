import { FC } from "react";

const Navigation: FC = () => {
    return (
        <div className="h-14 w-4/5 absolute right-0  bg-black flex items-center justify-end">
            <div className="flex  gap-8 mx-32 items-center text-white font-medium">
<a href="/signin" className="hover:text-green transition-colors cursor-pointer">Login</a>
                <a href="/register"className="hover:text-green transition-colors cursor-pointer">Register</a>
                <a href="/" className="hover:text-green transition-colors cursor-pointer">Home Page</a>
            </div>
        </div>
    );
};
export default Navigation;
