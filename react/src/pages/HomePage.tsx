import { FC, useEffect, useState } from "react";
import Arrivals from "../components/FlightOperations/Arrivals";
import Departures from "../components/FlightOperations/Departures";
import General from "../components/Announcements/General";
import Terminal from "../components/Terminal/Terminal";
import Ground from "../components/Ground/Ground";
import { useFlightOperaionContext } from "../contexts/ContextProvider";

const HomePage:FC = () => {

const [departures, setDepartures] = useState();
const [arrival, setArrival] = useState();

const flightOperationData = useFlightOperaionContext()

useEffect(() => {
 if (flightOperationData !== undefined) {
    const departureList = flightOperationData.filter((item) => item.type === 'Departure' );
    setDepartures(departureList);
    const arrivalList = flightOperationData.filter((item) => item.type === 'Arrival' );
    setArrival(arrivalList)
    }
}, [flightOperationData])

return (
    <>
    <div>
    </div>
    <div className=' bg-white w-full flex gap-8  px-32 my-8'>
  <div className=' w-1/3 flex flex-col gap-4'>

      <div className='bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll'>
          <p className='w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl '>Departures</p>
<Departures data={departures}/>
      </div>
      <div className='bg-white  shadow-gray shadow-md h-1/2 mt-2 rounded-2xl overflow-y-scroll'>
      <p className='w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl '>Arrivals</p>
<Arrivals data={arrival}/>
      </div>
  </div>
  <div className=' flex flex-col gap-4 w-1/3'>
<div className='h-1/2 bg-blue m-2 rounded-2xl shadow-blue shadow-2xl'></div>
<div className='bg-white  shadow-gray shadow-md rounded-2xl  h-1/2 mt-2 overflow-y-scroll '>
      <p className='w-full bg-gray text-center text-black  p-4 text-lg font-medium rounded-t-2xl'>Announcements</p>
      <General/>
      </div>
  </div>
  <div className='flex flex-col gap-4 w-1/3 min-h-screen'>
  <div className='bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll'>
          <p className='w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl'>Terminal</p>
          <Terminal/>
      </div>
      <div className='bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll'>
      <p className='w-full bg-gray text-center text-wblack p-4 text-lg font-medium rounded-t-2xl'>Ground</p>
      <Ground/>
      </div>
  </div>
</div>
    </>
)
}

export default HomePage;
