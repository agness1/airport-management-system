import { FC, useEffect, useState } from "react";
import Arrivals from "../components/FlightOperations/Arrivals";
import Departures from "../components/FlightOperations/Departures";
import AnnouncementMenager from "../components/Announcements/AnnouncementMenager";
import AnnouncementHomePage from "../components/Announcements/AnnouncementHomePage";
import TerminalHomePage from "../components/Terminal/TerminalHomePage";
import GroundHomePage from "../components/Ground/GroundHomePage";
import { useFlightOperaionContext } from "../contexts/ContextProvider";
import DashboardInterface from "../components/layout/DashboardInterface";


const HomePage:FC = () => {

const [departures, setDepartures] = useState();
const [arrival, setArrival] = useState();

const flightOperationData:any = useFlightOperaionContext()

console.log(flightOperationData)

useEffect(() => {
 if (flightOperationData !== undefined) {
    const departureList = flightOperationData.filter((item:any) => item.type === 'Departure' );
    setDepartures(departureList);
    const arrivalList = flightOperationData.filter((item:any) => item.type === 'Arrival' );
    setArrival(arrivalList)
    }
}, [flightOperationData])



return (
    <div className="flex">
        <DashboardInterface/>
    <div className='bg-white w-4/5 flex gap-8 pt-16 px-8 pb-8'>
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
      <AnnouncementHomePage/>
      </div>
  </div>
  <div className='flex flex-col gap-4 w-1/3 min-h-screen'>
  <div className='bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll'>
          <p className='w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl'>Terminal</p>
          <TerminalHomePage/>
      </div>
      <div className='bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll'>
      <p className='w-full bg-gray text-center text-wblack p-4 text-lg font-medium rounded-t-2xl'>Ground</p>
      <GroundHomePage/>
      </div>
  </div>
</div>
    </div>
)
}

export default HomePage;
