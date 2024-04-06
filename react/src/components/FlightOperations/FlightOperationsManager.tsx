import { FC, useEffect, useState } from 'react'
import axios from 'axios';
import { useFlightOperaionContext } from '../../contexts/ContextProvider'

const FlightOperationsManager:FC = () => {
const [flightOperation2, setFlightOperation2] = useState(true);
const [data, setData] = useState([]);
const deleteFlightOperation = (id:string) => {

   axios.delete(`http://localhost:8000/api/flight-operations/${id}`)
    .then(() => {
        console.log('Record deleted successfully')
    })
    .catch(error => {
      console.error('Error occurred while deleting the record:', error);
    });

setFlightOperation2(!flightOperation2)
}

console.log('test')

useEffect(() => {
    axios.get('http://localhost:8000/api/flightData')
    .then(response => {
    setData(response.data)
    })
    .catch(error => {
      console.error('Wystąpił błąd podczas pobierania danych:', error);
    });

},[])
const flightOperationData = useFlightOperaionContext();
console.log(flightOperationData)
return (
  <div className="bg-black w-full mx-auto  flex flex-col items-center rounded-b-md p-8 mt-32 ">
    <h2 className='text-white font-medium text-3xl m-2 mb-8'>Active Flight Operations</h2>
{data.map((item:any) => {
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
})}
  </div>
)

}

export default FlightOperationsManager
