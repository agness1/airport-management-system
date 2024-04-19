import { FC, useState} from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";
import DashboardInterface from "../../components/layout/DashboardInterface";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

interface Data {
    name: string;
    role: string;
    email: string;
    password: string;
}

const RegisterPage:FC = () => {

const[userRole, setUserRole] = useState<Data>();
const[name, setName] = useState<Data>();
const[email, setEmail] = useState<Data>();
const[password, setPassword] = useState<Data>();
console.log(userRole)
const [errors, setErrors] = useState(null)

const handleUserRoleChange = (event:any) => {
    setUserRole(event.target.value);
};

const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
};

const handleNameChange = (event:any) => {
    setName(event.target.value);
};

const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
};

const rolesData = UseFetchApi('http://localhost:8000/api/roles')

const {setUser, setToken, setRole} = useStateContext()

const sendUserData = (event:any) => {
    event.preventDefault();
const data={email:email,role:userRole,password:password,name:name}
    axiosClient.post('/signup', data)

    .then(({data}:any) => {
    setUser(data.user)
    setToken(data.token)
    setRole(data.roleName.Role)
    setUserRole('');
    setEmail('');
    setName('');
    setPassword('');
    setErrors(null);
    })
    .catch ((error:any) => {
    const response = error.response;

    if (response && response.status === 422) {
    setErrors(response.data.errors)
    }
    })

    }

    const roleLists = () => {
        const roles = rolesData.data
        if (roles !== null) {
            const area = roles.roles.map((item: any) => (

                  <option className="font-medium" key={item.id} value={item.id} >
                    {item.Role}
                </option>
            ));

            return area;
        } else return <option value="">No data available</option>;
    }

return (
<div className="flex">
    <DashboardInterface/>
    <div className="flex w-1/2 flex-col justify-center mx-auto  px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST"
         onSubmit={sendUserData}
        >
          <div>

            <label  className="block text-sm font-medium leading-6 text-gray-900">Your Role</label>
            <div className="mt-2">
            <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserRoleChange}>
                {roleLists()}
            </select>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors ? errors.role : ""}
            </small>
            </div>
          </div>
          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={name} onChange={handleNameChange}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors ? errors.name : ""}
            </small>
          </div>
          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input  type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={email} onChange={handleEmailChange}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors ? errors.email : ""}
             </small>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input  type="password" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={password} onChange={handlePasswordChange}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors ? errors.password : ""}
            </small>
          </div>

          <div>

          </div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
        </form>
      </div>

    </div>

</div>
)
}

export default RegisterPage
