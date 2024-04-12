import {FC, useEffect, useState} from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import axios from 'axios';
import { useForm,} from "react-hook-form"
import FlightOperationsManager from "../../components/FlightOperations/FlightOperationsManager";

import UseFetchApi from '../../hooks/API/useFetchApi';

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
    const fetchFlightResources =  UseFetchApi('http://localhost:8000/api/flightResourcesData')



    const [flightResources, setFlightResources] =  useState<any>()



    const resources = fetchFlightResources.data

    useEffect(() => {
        setFlightResources(resources)
    }, [resources])

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Data>();

      const onSubmit = (data:any) => console.log(data);


      const registerOptions = {
        time: {
          required: "Time is required",
        },
        airline: {
          required: "Airline is required",
        },
        callSign: {
          required: "CallSign is required",
          minLength: {
            value: 5,
            message: "Call Sign must have 5 characters",
          },
          maxLength: {
            value: 5,
            message: "Call Sign must have 5 characters",
          },
        },
        aircraft: {
          required: "Aircraft is required",
        },
        airport: {
          required: "Airport is required",
        },
        gate: {
          required: "Gate is required",
        },
        type: {
          required: "Type is required",
        },
      };

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

const sendFlightOperationData = async (data:any) => {
    try {
        await axios.post('http://localhost:8000/api/createFlightOperationData', data);
        window.location.reload();
    } catch (error) {
        console.error( error);
    }
}

return (
    <div className="flex">
<DashboardInterface/>
<div className="bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md">
<h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Add Flight Operation</h2>
<form className="flex flex-col w-9/12 gap-2" onSubmit={handleSubmit((data)=>{
onSubmit(data);
sendFlightOperationData(data)
})}>
    <label className="font-medium p-2 text-xl" >Type</label>
    <select className="h-12 rounded-md font-medium p-2" {...register("type", registerOptions.type)}>
{operationType()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.type && errors.type.message}
            </small>
    <label className="font-medium p-2 text-xl">Time</label>
    <input className="h-12 rounded-md font-medium p-2" type="time"{...register("time", registerOptions.time)}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.time && errors.time.message}
            </small>
    <label className="font-medium p-2 text-xl">Airline</label>
    <select className="h-12 rounded-md font-medium p-2" {...register("airline", registerOptions.airline)}>
    {airlinesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.airline && errors.airline.message}
            </small>
    <label className="font-medium p-2 text-xl">Call Sign</label>
    <input className="h-12 rounded-md font-medium p-2" type="text"  {...register("callSign", registerOptions.callSign)}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.callSign && errors.callSign.message}
            </small>
    <label className="font-medium p-2 text-xl">Gate</label>
    <select className="h-12 rounded-md font-medium p-2" {...register("gate", registerOptions.gate)}>
        {gatesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.gate && errors.gate.message}
            </small>
    <label className="font-medium p-2 text-xl">Airport</label>
    <select className="h-12 rounded-md font-medium p-2" {...register("airport", registerOptions.airport)}>
        {airportList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.airport && errors.airport.message}
            </small>
    <label className="font-medium p-2 text-xl">Aircraft</label>
    <select className="h-12 rounded-md font-medium p-2" {...register("aircraft", registerOptions.aircraft)}>
        {aircraftList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.aircraft && errors.aircraft.message}
            </small>
    <button className="bg-green p-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all" type="submit">Add</button>
</form>
<FlightOperationsManager/>
</div>
    </div>

)

}

export default FlightOperationsSupervisorPage;



