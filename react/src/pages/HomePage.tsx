import { FC, useEffect, useState } from "react";
import AnnouncementHomePage from "../components/Announcements/AnnouncementHomePage";
import TerminalHomePage from "../components/Terminal/TerminalHomePage";
import GroundHomePage from "../components/Ground/GroundHomePage";
import DashboardInterface from "../components/layout/DashboardInterface";
import Weather from "../components/WeatherApi/Weather";
import FlightOperations from "../components/FlightOperations/FlightOperations";

import UseFetchApi from "../hooks/API/useFetchApi";

const HomePage: FC = () => {
    const [departures, setDepartures] = useState();
    const [arrival, setArrival] = useState();

    const fetchFlightData = UseFetchApi("http://localhost:8000/api/flightData");

    const flightOperationData = fetchFlightData.data;

    useEffect(() => {
        if (flightOperationData !== undefined && flightOperationData !== null) {
            const departureList = flightOperationData.filter(
                (item: any) => item.type === "Departure"
            );
            setDepartures(departureList);
            const arrivalList = flightOperationData.filter(
                (item: any) => item.type === "Arrival"
            );
            setArrival(arrivalList);
        }
    }, [flightOperationData]);

    return (
        <div className="flex h-screen">
            <DashboardInterface />
            <div className="bg-white lg:w-4/5 w-full lg:flex gap-8 pt-16 px-8 pb-8 ">
                <div className=" lg:w-1/3 flex flex-col gap-4">
                    <div className="bg-white  shadow-gray shadow-md rounded-2xl h-1/2  mt-2 overflow-y-scroll">
                        <p className="w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl ">
                            Departures
                        </p>
                        <FlightOperations data={departures} />
                    </div>
                    <div className="bg-white  shadow-gray shadow-md h-1/2 mt-2 rounded-2xl overflow-y-scroll">
                        <p className="w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl ">
                            Arrivals
                        </p>
                        <FlightOperations data={arrival} />
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-1/3 my-4 lg:my-0">
                    <Weather />
                    <div className="bg-white  shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll ">
                        <p className="w-full bg-gray text-center text-black  p-4 text-lg font-medium rounded-t-2xl">
                            Announcements
                        </p>
                        <AnnouncementHomePage />
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <div className="bg-white  shadow-gray shadow-md rounded-2xl  h-1/2 mt-2 overflow-y-scroll">
                        <p className="w-full bg-gray text-center text-black p-4 text-lg font-medium rounded-t-2xl">
                            Terminal
                        </p>
                        <TerminalHomePage />
                    </div>
                    <div className="bg-white shadow-gray shadow-md rounded-2xl h-1/2 mt-2 overflow-y-scroll">
                        <p className="w-full bg-gray text-center text-wblack p-4 text-lg font-medium rounded-t-2xl">
                            Ground
                        </p>
                        <GroundHomePage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
