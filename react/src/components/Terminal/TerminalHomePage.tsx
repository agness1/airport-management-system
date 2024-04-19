import { FC, useEffect, useState } from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";

const TerminalHomePage:FC = () => {
    const groundFetchData = UseFetchApi('http://localhost:8000/api/showEmergenciesData')


    const emergenciesData = groundFetchData.data

    const [status, setStatus] = useState()


    const openStatus = () => {
return (
    <>
 <p>Open</p>
    <div className="h-4 w-4 bg-green rounded-full"></div>
    </>
)
    }
    const closedStatus = () => {
return (
    <>
    <p>Closed</p>
       <div className="h-4 w-4 bg-red-600 rounded-full"></div>
       </>
)
 }

 const getStatus = UseFetchApi('http://localhost:8000/api/showStatus')


useEffect (() => {
    if(getStatus.data !== null && getStatus.data !== undefined) {
        setStatus(getStatus.data.Terminal)
    }
},[getStatus.data])


const emergenciesList = () => {
    if(emergenciesData !== undefined && emergenciesData !== null) {
        const emergency = emergenciesData.map((item:any) => {
    return (
        <div className="bg-white p-2">
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
        </div>
    )
        })
        return emergency
    }
        }

    return (
       <div className="mt-8 ">
        <div className="w-11/12 h-5/6 m-auto p-2 text-center ">
<div className="flex gap-4 justify-center items-center mb-4 border-2 border-gray w-3/5 m-auto p-2 rounded-md">
    <p className="font-medium">Status:</p>
    {status === 'open' ? openStatus() : closedStatus()}

</div>
<h3 className="font-medium text-lg text-red-600 ">Emergencies</h3>

{emergenciesList()}


        </div>
       </div>
    )
}

export default TerminalHomePage;
