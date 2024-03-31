import {FC, useEffect, useState} from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import axios from 'axios';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import FlightOperationsManager from "../../components/FlightOperations/FlightOperationsManager";

const FlightOperationsSupervisorPage:FC = () => {

    const [flightResources, setFlightResources] =  useState()
    const [airline, setAirline] = useState();
    const [aircraft, setAircraft] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({});

      const onSubmit = (data) => console.log(data);


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


useEffect(() => {
    axios.get('http://localhost:8000/api/v1/flightOperationData')
    .then(response => {
    setFlightResources(response.data)
     console.log(response.data)
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    });

}, [])


console.log(flightResources)

const airlinesList = () => {

if(flightResources !== undefined)
{
    const airlines = Object.values(flightResources.airlines).map((item) => <option value={item.id}>{item.AirlineCode}</option> )

    return airlines
} else return<option value=''>No data available</option>


}


const operationType= () => {
    if(flightResources !== undefined)
    {
        const type = Object.values(flightResources.types).map((item) => <option value={item.id}>{item.Type}</option> )

        return type
    } else return<option value=''>No data available</option>


}


const gatesList= () => {
    if(flightResources !== undefined)
    {
        const gate = Object.values(flightResources.gates).map((item) => <option value={item.id}>{item.Gate}</option> )

        return gate
    } else return<option value=''>No data available</option>


}


const aircraftList= () => {
    if(flightResources !== undefined)
    {
        const aircraft = Object.values(flightResources.aircrafts).map((item) => <option value={item.id}>{item.AircraftCode}</option> )

        return aircraft
    } else return<option value=''>No data available</option>


}

const airportList= () => {
    if(flightResources !== undefined)
    {
        const airport= Object.values(flightResources.airports).map((item) => <option value={item.id}>{item.AirportCode}</option> )

        return airport
    } else return<option value=''>No data available</option>


}


//const airlineResources = Object.values(flightResources.airlines)


   /* axios.post('http://localhost:8000/api/getFlightOperationData', 'ok')
    .then(response => {
     console.log('ok')
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    });
*/



const sendFlightOperationData = (data) => {
    axios.post('http://localhost:8000/api/getFlightOperationData', data)
    .then(response => {
     console.log(data)
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    });
}


return (
    <div className="flex ">
<DashboardInterface/>
<div className="bg-gray w-1/2 mx-auto my-8 flex flex-col items-center rounded-md">
<h2 className="m-10 text-2xl font-medium">Add Flight Operation</h2>
<form className="flex flex-col w-9/12 gap-2" onSubmit={handleSubmit((data)=>{
onSubmit(data);
sendFlightOperationData(data)
})}>
    <label >Type</label>
    <select className="h-12" {...register("type", registerOptions.type)}>
{operationType()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.type && errors.type.message}
            </small>
    <label>Time</label>
    <input type="time"{...register("time", registerOptions.time)}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.time && errors.time.message}
            </small>
    <label>Airline</label>
    <select {...register("airline", registerOptions.airline)}>
    {airlinesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.airline && errors.airline.message}
            </small>
    <label>Call Sign</label>
    <input type="text"  {...register("callSign", registerOptions.callSign)}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.callSign && errors.callSign.message}
            </small>
    <label>Gate</label>
    <select {...register("gate", registerOptions.gate)}>
        {gatesList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.gate && errors.gate.message}
            </small>
    <label>Airport</label>
    <select  {...register("airport", registerOptions.airport)}>
        {airportList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.airport && errors.airport.message}
            </small>
    <label>Aircraft</label>
    <select {...register("aircraft", registerOptions.aircraft)}>
        {aircraftList()}
    </select>
    <small className="text-danger text-red-700 font-medium text-sm">
              {errors?.aircraft && errors.aircraft.message}
            </small>
    <button type="submit">Add</button>
</form>
<FlightOperationsManager/>
</div>
    </div>

)

}

export default FlightOperationsSupervisorPage;



