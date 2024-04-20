import {FC, useEffect, useState} from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import { useForm,} from "react-hook-form"
import FlightOperationsManager from "../../components/FlightOperations/FlightOperationsManager";
import { useStateContext } from "../../contexts/ContextProvider";
import UseFetchApi from '../../hooks/API/useFetchApi';
import { Navigate } from "react-router-dom";
import UseSendDataApi from "../../hooks/API/useSendDataApi";
import AccessDeniedPage from "../auth/AccessDeniedPage";
import {createRef} from "react";

interface Data {
    time: string,
    aircraft: string,
    airline: string,
    callSign: string,
    type:string,
    gate:string,
    airport:string
}


const FlightOperationsSupervisorPage:FC = () => {

    const [type, setType] = useState('');
    const [time, setTime] = useState('');
    const [airline, setAirline] = useState('');
    const [callSign, setCallSign] = useState('');
    const [gate, setGate] = useState('');
    const [airport, setAirport] = useState('');
    const [aircraft, setAircraft] = useState('');
    const [error, setError] = useState('');
console.log(type)
    const handleChangeType = (e:any) => setType(e.target.value);
    const handleChangeTime = (e:any) => setTime(e.target.value);
    const handleChangeAirline = (e:any) => setAirline(e.target.value);
    const handleChangeCallSign = (e:any) => setCallSign(e.target.value);
    const handleChangeGate = (e:any) => setGate(e.target.value);
    const handleChangeAirport = (e:any) => setAirport(e.target.value);
    const handleChangeAircraft = (e:any) => setAircraft(e.target.value);

    const fetchFlightResources =  UseFetchApi('http://localhost:8000/api/flightResourcesData')


    const [flightResources, setFlightResources] =  useState<any>()

    const resources = fetchFlightResources.data

    useEffect(() => {
        setFlightResources(resources)
    }, [resources])

const airlinesList = () => {

if(flightResources !== null && flightResources !== undefined)
{
    const airlines = Object.values(flightResources.airlines).map((item:any) => <option className="font-medium" value={item.id}>{item.AirlineCode}</option> )

    return airlines
} else return <option value=''>No data available</option>

}

const operationType= () => {
    if(flightResources !== null && flightResources !== undefined)
    {
        const type = Object.values(flightResources.types).map((item:any) => <option value={item.id} className="font-medium">{item.Type}</option> )

        return type
    } else return <option value=''>No data available</option>
}

const gatesList= () => {
    if(flightResources !== null && flightResources !== undefined)
    {
        const gate = Object.values(flightResources.gates).map((item:any) => <option className="font-medium" value={item.id}>{item.Gate}</option> )

        return gate
    } else return <option value=''>No data available</option>
}

const aircraftList= () => {
    if(flightResources !== null && flightResources !== undefined)
    {
        const aircraft = Object.values(flightResources.aircrafts).map((item:any) => <option className="font-medium" value={item.id}>{item.AircraftCode}</option> )

        return aircraft
    } else return <option value=''>No data available</option>
}

const airportList= () => {
    if(flightResources !== null && flightResources !== undefined)
    {
        const airport= Object.values(flightResources.airports).map((item:any) => <option className="font-medium" value={item.id}>{item.AirportCode}</option> )

        return airport
    } else return <option value=''>No data available</option>
}


const {dataError, sendData} = UseSendDataApi()

const {user, token, role} = useStateContext();

if (!token || (role !== 'Flight Operations Manager' && role !== 'Administrator')) {
    return <AccessDeniedPage onData={'Flight Operations Manager'}/>
}

const submit = (e:any) => {
    e.preventDefault()
    const formData = {
        type,
        time,
        airline,
        callSign,
        gate,
        airport,
        aircraft
    };
    console.log(formData)
    sendData('http://localhost:8000/api/createFlightOperationData', formData)
}
console.log(dataError)


const showErrors = () => {
    if (dataError !== null && dataError.errors !== null) {
   const flightOperationErrors =  Object.values(dataError.errors).map((item:any) => {
    return <p>{item}</p>
     })
     return flightOperationErrors
    }

}


return (
    <div className="flex">
<DashboardInterface/>
<div className="bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md">
<h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Add Flight Operation</h2>
<form className="flex flex-col w-9/12 gap-2" onSubmit={submit} >
    <label className="font-medium p-2 text-xl" >Type</label>
    <select className="h-12 rounded-md font-medium p-2" onChange={handleChangeType} >
{operationType()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Time</label>
    <input className="h-12 rounded-md font-medium p-2" type="time" onChange={handleChangeTime}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Airline</label>
    <select className="h-12 rounded-md font-medium p-2" onChange={handleChangeAirline} >
    {airlinesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Call Sign</label>
    <input className="h-12 rounded-md font-medium p-2" type="text" onChange={handleChangeCallSign}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Gate</label>
    <select className="h-12 rounded-md font-medium p-2" onChange={handleChangeGate} >
        {gatesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Airport</label>
    <select className="h-12 rounded-md font-medium p-2" onChange={handleChangeAirport}>
        {airportList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <label className="font-medium p-2 text-xl">Aircraft</label>
    <select className="h-12 rounded-md font-medium p-2" onChange={handleChangeAircraft}>
        {aircraftList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {}
            </small>
    <button className="bg-green p-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all" type="submit">Add</button>
</form>
{showErrors()}
<FlightOperationsManager/>
</div>
    </div>

)

}

export default FlightOperationsSupervisorPage;



