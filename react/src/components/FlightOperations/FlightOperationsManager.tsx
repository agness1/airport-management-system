import { FC,} from 'react'
import DeleteApi from '../../hooks/API/useDeleteApi';
import UseFetchApi from '../../hooks/API/useFetchApi';

const FlightOperationsManager:FC = () => {

const fetchFlightResources =  UseFetchApi('http://localhost:8000/api/flightData')

const flightOperationData = fetchFlightResources.data

const deleteApi = async (url:string, id:string) => {
    const {message} = await DeleteApi(url,id)
    console.log(message)
}

const flightOperationList = () => {
    if(flightOperationData !== undefined && flightOperationData !== null) {
        const operaionData = flightOperationData.map((item:any) => {
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

                <button className='bg-blue text-white p-2 px-4 rounded-md hover:bg-green transition-all' onClick={() => deleteApi('http://localhost:8000/api/flight-operations/', item.id)}>Delete</button>
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
