import { FC } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import {createRef} from "react";
import { useStateContext } from "../../contexts/ContextProvider.js";
import { useState } from "react";
const SignInPage:FC = () => {
    const emailRef = createRef()
  const passwordRef = createRef()
  const { setUser, setToken, setRole} = useStateContext()
  const [message, setMessage] = useState(null)

  const onSubmit = (ev:any) => {
    ev.preventDefault()

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    axiosClient.post('/login', payload)
      .then(({data}:any) => {
        setUser(data.user)
        setToken(data.token);
        setRole(data.role.Role)
      })
      .catch((err:any) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message)
        }
      })
  }
return (
<div className="flex">
    <DashboardInterface/>
    <div className="flex w-1/2 flex-col justify-center mx-auto  px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        {message &&
            <div className="">
              <p>{message}</p>
            </div>
          }
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST"  onSubmit={onSubmit}>
          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input ref={emailRef} id="email" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input ref={passwordRef} id="password" name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
</div>
)
}


export default SignInPage
