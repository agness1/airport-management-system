import { FC,} from 'react'
import DeleteApi from '../../hooks/API/useDeleteApi';
import UseFetchApi from '../../hooks/API/useFetchApi';

const FlightOperationsManager:FC = () => {

const fetchFlightData =  UseFetchApi('http://localhost:8000/api/flightData')

const flightOperationData = fetchFlightData.data

const deleteApi = async (url:string, id:string) => {
    const {message} = await DeleteApi(url,id)
    console.log(message)
}

const flightOperationList = () => {
    if(flightOperationData !== undefined && flightOperationData !== null) {
        const operaionData = flightOperationData.map((item:any) => {
            return (
        <div className='w-full bg-white p-2 rounded-md my-8'>
            <div className='flex flex-col lg:flex-row gap-4 justify-around items-center font-medium'>
                <p className='break-all'>{item.airline}</p>
                <p className='break-all'>{item.type}</p>
                <p className='break-all'>{item.gate}</p>
                <p className='break-all'>{item.aircraft}</p>
                <p className='break-all'>{item.time}</p>
                <p className='break-all'>{item.callSign}</p>
                <p className='break-all'>{item.airport}</p>

                <button className='bg-blue text-white p-2 px-4 rounded-md hover:bg-green transition-all' onClick={() => deleteApi('http://localhost:8000/api/flight-operations/', item.id)}>Delete</button>
            </div>
        </div>
            )
        })
        return operaionData
    } else return <h3 className='text-center text-2xl text-white'>No data available</h3>
}

return (
  <div className="bg-black h-full lg:w-1/2 lg:mx-auto  flex flex-col items-center rounded-md  ">
    <h2 className='text-black p-4 rounded-t-md text-center bg-gray w-full font-medium text-3xl  mb-8'>Active Flight Operations</h2>
<div className='w-11/12'>
  {flightOperationList()}
</div>

  </div>
)

}

export default FlightOperationsManager
