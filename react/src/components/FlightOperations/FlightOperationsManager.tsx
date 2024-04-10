import { FC, useEffect, useState } from 'react'
import axios from 'axios';

import useFlightOperationApi from '../../hooks/API/FlightOperations/useFlightOperationApi';

const FlightOperationsManager:FC = () => {

const [data, setData] = useState<any>();

const api = useFlightOperationApi()

const flightOperationData = api.flightOperations

useEffect(() => {
setData(flightOperationData)
}, [flightOperationData])


const deleteFlightOperation = async (id:string) => {
    try {
        await axios.delete(`http://localhost:8000/api/flight-operations/${id}`);
        window.location.reload();
    } catch (error) {
        console.error( error);
    }
}

const flightOperationList = () => {
    if(data !== undefined && data !== null) {
        const operaionData = data.map((item:any) => {
            return (
        <div className='w-9/12 bg-white p-4 rounded-md m-4'>
            <div className='flex gap-4 justify-around items-center font-medium'>
                <p>{item.airline}</p>
                <p>{item.type}</p>
                <p>{item.gate}</p>
                <p>{item.aircraft}</p>
                <p>{item.time}</p>
                <p>{item.callSign}</p>
                <p>{item.airport}</p>
                <button className='bg-blue text-white p-2 px-4 rounded-md hover:bg-green transition-all' onClick={() => deleteFlightOperation(item.id)}>Delete</button>
            </div>
        </div>
            )
        })
        return operaionData
    } else return <h3>No data available</h3>
}

return (
  <div className="bg-black w-full mx-auto  flex flex-col items-center rounded-b-md p-8 mt-32 ">
    <h2 className='text-white font-medium text-3xl m-2 mb-8'>Active Flight Operations</h2>
{flightOperationList()}
  </div>
)

}

export default FlightOperationsManager
