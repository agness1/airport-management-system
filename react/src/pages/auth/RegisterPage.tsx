import { FC, useState } from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";
import DashboardInterface from "../../components/layout/DashboardInterface";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

interface Data {
    name: string;
    role: string;
    email: string;
    password: string;

}

const RegisterPage:FC = () => {
const [errorss, setErrorss] = useState(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>();

    const onSubmit = (data: any) => console.log(data);

const rolesData = UseFetchApi('http://localhost:8000/api/roles')

const registerOptions = {
    name: {
        required: "Name is required",
        minLength: {
            value: 3,
            message: "Name must have at least 20 characters",
        },
        maxLength: {
            value: 50,
            message: "Name must have max 250 characters",
        },
    },
    email: {
        required: "Email is required",
    },
    role: {
        required: "Your role in company is required",
    },
    password: {
        required: "Password is required (min length: 10)",
        minLength: {
            value: 10,
            message: "Password must have at least 10 characters",
        },
        maxLength: {
            value: 20,
            message: "Password must have max 250 characters",
        },
    },

};


const roleLists = () => {
    const roles = rolesData.data

    if (roles !== null) {
        const area = roles.roles.map((item: any) => (
              <option className="font-medium" value={item.id}>
                {item.Role}
            </option>
        ));

        return area;
    } else return <option value="">No data available</option>;
}

const {setUser, setToken, setRole} = useStateContext()

const sendUserData = (data:any) => {

    axiosClient.post('/signup', data)

    .then(({data}:any) => {
    setUser(data.user)
    setToken(data.token)
    setRole(data.roleName.Role)
    })
    .catch ((error:any) => {
    const response = error.response;

    if (response && response.status === 422) {
setErrorss(response.data.errors)
    }
    })

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
         onSubmit={handleSubmit((data) => {
            onSubmit(data);
            sendUserData(data)
        })}
        >
          <div>
            <div>
                {errorss && <div>
                    {Object.keys(errorss).map( key => (
                    <p key={key} className="text-red-600 font-bold">{errorss[key][0]}</p>
                    ))}
                    </div>
                }
            </div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Your Role</label>
            <div className="mt-2">
            <select className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("role", registerOptions.role)}
            >
                {roleLists()}
            </select>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.role && errors.role.message}
                            </small>
            </div>
          </div>
          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div className="mt-2">
              <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register("name", registerOptions.name)}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.name && errors.name.message}
                            </small>
          </div>
          <div>
            <label  className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input  type="email"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register("email", registerOptions.email)}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.email && errors.email.message}
                            </small>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input  type="password"   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" {...register("password", registerOptions.password)}/>
            </div>
            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.password && errors.password.message}
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
