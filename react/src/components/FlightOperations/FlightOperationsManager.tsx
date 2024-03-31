import { FC } from 'react'
import axios
 from 'axios';
import { useFlightOperaionContext } from '../../contexts/ContextProvider'

const FlightOperationsManager:FC = () => {

const deleteFlightOperation = (id:string) => {

   axios.delete(`http://localhost:8000/api/flight-operations/${id}`)
    .then(() => {
        console.log('Record deleted successfully')
    })
    .catch(error => {
      console.error('Error occurred while deleting the record:', error);
    });

}


const flightOperationData = useFlightOperaionContext();
console.log(flightOperationData)
return (
  <div className="bg-gray w-1/2 mx-auto my-8 flex flex-col items-center rounded-md">
{flightOperationData.map((item) => {
    return (
<div className=''>
    <div className='flex gap-4'>
        <p>{item.airline}</p>
        <p>{item.type}</p>
        <p>{item.gate}</p>
        <p>{item.aircraft}</p>
        <p>{item.time}</p>
        <p>{item.callSign}</p>
        <p>{item.airport}</p>
        <button className='bg-black text-white' onClick={() => deleteFlightOperation(item.id)}>Delete</button>
    </div>
</div>
    )
})}
  </div>
)

}

export default FlightOperationsManager
