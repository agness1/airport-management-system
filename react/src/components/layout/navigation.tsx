import { FC } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import {useEffect} from "react";
import MobileNavigation from "./Moblie-menu";

const Navigation: FC = () => {

const {user, token, setUser, setToken, setRole, role} = useStateContext();

 const onLogout = (ev:any) => {
        ev.preventDefault()
        axiosClient.post('/logout')
          .then(() => {
            setUser({})
            setToken(null)
            setRole(null)
          })
      }

      useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
             setUser(data)
          })
      }, [])


    return (
        <>
  <div className="hidden h-14 w-4/5 absolute right-0  bg-black lg:flex items-center justify-end">
            <div className="flex  gap-8 mx-32 items-center text-white font-medium">
                {token ? <><button onClick={onLogout}>Logout</button> <p>Your role: {role}</p> </>: <a href="/signin" className="hover:text-green transition-colors cursor-pointer">Login</a>}

                <a href="/register"className="hover:text-green transition-colors cursor-pointer">Register</a>
                <a href="/" className="hover:text-green transition-colors cursor-pointer">Home Page</a>
            </div>

        </div>
        <MobileNavigation/>
        </>

    );

};
export default Navigation;
