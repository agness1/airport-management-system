import { FC, useState } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import { useForm } from "react-hook-form";
import axios from "axios";
import AnnouncementForm from "../../components/Announcements/AnnouncementForm";
import AnnouncementMenager from "../../components/Announcements/AnnouncementMenager";
import GroundManager from "../../components/Ground/GroundManager";
import UseFetchApi from '../../hooks/API/useFetchApi';
import AccessDeniedPage from "../auth/AccessDeniedPage";
import { useStateContext } from "../../contexts/ContextProvider";
import UseSendDataApi from "../../hooks/API/useSendDataApi";



interface Data {
    area: string;
    startDate: string;
    endDate: string;
    description: string;

}

const GroundManagerPage: FC = () => {

    const [area, setArea] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [description, setDescription] = useState('');

    const handleAreaChange = (e) => setArea(e.target.value);
    const handleStartDateChange = (e) => setStartDate(e.target.value);
    const handleEndDateChange = (e) => setEndDate(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const fetchEmergencies =  UseFetchApi('http://localhost:8000/api/areaOfRenovation')

    const [statusRwyL, setStatusRwyL] = useState()
    const [statusRwyR, setStatusRwyR] = useState()

    const RunwayLeftStatusHandler= (e:any)  => {
        setStatusRwyL(e.target.value)
    }
    const RunwayRightStatusHandler= (e:any)  => {
        setStatusRwyR(e.target.value)
    }


    const areaOfRenovationList = () => {
        const areas = fetchEmergencies.data;

        if (areas !== null) {
            const area = areas.area.map((item: any) => (
                  <option className="font-medium" value={item.id}>
                    {item.Area}
                </option>
            ));

            return area;
        } else return <option value="">No data available</option>;
    };


    const {dataError, sendData} = UseSendDataApi()

    const submit = (e:any) => {
        e.preventDefault()
        const formData = {
            area,
            startDate,
            endDate,
            description,
        };
        sendData('http://localhost:8000/api/createRenovationsData', formData)
    }


    const {user, token, role} = useStateContext();
    if (!token || (role !== 'Airport Ground Manager' && role !== 'Administrator')) {
        return <AccessDeniedPage onData={'Airport Ground Manager'}/>
    }

    const setRunwayLeftStatus = (e:any) => {
        e.preventDefault()
        const statusData = statusRwyL
        const data = {
        status: statusData,
        part: 'rwyl'
        }
        sendData('http://localhost:8000/api/updateStatus', data)
        }

    const setRunwayRightStatus = (e:any) => {
        e.preventDefault()
        const statusData = statusRwyR
        const data = {
        status: statusData,
        part: 'rwyr'
        }
        sendData('http://localhost:8000/api/updateStatus', data)
        }


    const showErrors = () => {
        if (dataError !== null && dataError.errors !== null) {
       const renovationsErrors =  Object.values(dataError.errors).map((item:any) => {
        return <p>{item}</p>
         })
         return renovationsErrors
        }

    }

        const getStatus = UseFetchApi('http://localhost:8000/api/showStatus')
        const currentStatus = () => {
        if(getStatus.data !== null && getStatus.data !== undefined) {
        return (
            <div>
                <p>RWYL <span>{getStatus.data.RWYL}</span></p>
                <p>RWYR <span>{getStatus.data.RWYR}</span></p>
            </div>

        )

    } else return <p>No data available</p>

        }

    return (
        <div className="flex">
            <DashboardInterface />

            <div className="flex flex-col w-9/12 items-center mx-auto p-8">
                <div className="flex gap-10 w-full justify-center mx-auto mb-8">
                    <div className="bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add Renowation Work
                        </h2>
                        <form
                            className="flex flex-col w-9/12 gap-4" onSubmit={submit} >
                            <label className="font-medium p-2 text-2xl text-center">
                                Area of work
                            </label>
                            <select
                                className="h-12 rounded-md font-medium p-2" onChange={handleAreaChange}>
                                {areaOfRenovationList()}
                            </select>
                            <small className="text-danger text-red-700 font-medium text-sm">

                            </small>
                            <label className="font-medium p-2 text-2xl text-center">
                                Start Date
                            </label>
                            <input
                                type="date"
                                className="h-12 rounded-md font-medium p-2 text-center" onChange={handleStartDateChange}></input>
                            <small className="text-danger text-red-700 font-medium text-sm">

                            </small>
                            <label className="font-medium p-2 text-2xl text-center">
                                End Date
                            </label>
                            <input
                                type="date"
                                className="h-12 rounded-md font-medium p-2 text-center" onChange={handleEndDateChange}></input>
                            <small className="text-danger text-red-700 font-medium text-sm">

                            </small>
                            <label className="font-medium p-2 text-2xl text-center  ">
                                Description
                            </label>
                            <textarea
                                className="h-16 rounded-md font-medium p-2" onChange={handleDescriptionChange}></textarea>
                            <small className="text-danger text-red-700 font-medium text-sm">

                            </small>
                            <button
                                className="bg-green p-4 mb-8 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all"
                                type="submit"
                            >
                                Add
                            </button>
                            {showErrors()}
                        </form>
                    </div>
                    <div className=" bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Ground Status
                        </h2>
                        <h3 className="text-3xl font-medium mb-8">Runways</h3>

                        <form className="flex gap-8 m-4 items-center flex-wrap justify-center" onSubmit={setRunwayLeftStatus} >
                            <p className="uppercase font-bold text-2xl">
                                rwy l
                            </p>
                            <label className="font-medium text-xl text-green uppercase">
                                Open
                            </label>
                            <input type="radio"  name="status" value={'open'} onChange={RunwayLeftStatusHandler} className="w-4 h-4"></input>
                            <label className="font-medium text-xl text-red-700 uppercase">
                                Closed
                            </label>
                            <input type="radio"  name="status" value={'closed'} onChange={RunwayLeftStatusHandler} className="w-4 h-4"></input>
                            <button type="submit" className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">
                                Set Status
                            </button>
                        </form>
                        <form className="flex gap-8 m-4 items-center flex-wrap justify-center" onSubmit={setRunwayRightStatus}>
                            <p className="uppercase font-bold text-2xl">
                                rwy r
                            </p>
                            <label className="font-medium text-xl text-green uppercase">
                                Open
                            </label>
                            <input type="radio"  name="status" value={'open'} onChange={RunwayRightStatusHandler} className="w-4 h-4"></input>
                            <label className="font-medium text-xl text-red-700 uppercase">
                                Closed
                            </label>
                            <input type="radio" name="status" value={'closed'} onChange={RunwayRightStatusHandler} className="w-4 h-4"></input>
                            <button className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">
                                Set Status
                            </button>
                        </form>
                        <div>
                            <p>Current runways status:</p>
                           {currentStatus()}
                        </div>
                    </div>
                </div>
                <div className="flex gap-10 w-full justify-center mx-auto mb-16">
                    <div className="bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add an Announcement{" "}
                        </h2>
                        <AnnouncementForm/>
                    </div>

                    <div className=" bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Manage Renowation Works
                        </h2>
                       <GroundManager/>
                    </div>
                </div>
                <AnnouncementMenager/>
            </div>
        </div>
    );
};

export default GroundManagerPage;
