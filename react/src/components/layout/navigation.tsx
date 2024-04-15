import { FC } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";
import {useEffect} from "react";

const Navigation: FC = () => {

    const {user, token, setUser, setToken, setRole} = useStateContext();

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
        <div className="h-14 w-4/5 absolute right-0  bg-black flex items-center justify-end">
            <div className="flex  gap-8 mx-32 items-center text-white font-medium">
<a href="/signin" className="hover:text-green transition-colors cursor-pointer">Login</a>
<button onClick={onLogout}>Logout</button>
                <a href="/register"className="hover:text-green transition-colors cursor-pointer">Register</a>
                <a href="/" className="hover:text-green transition-colors cursor-pointer">Home Page</a>
            </div>
        </div>
    );




};
export default Navigation;
