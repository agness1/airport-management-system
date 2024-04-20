import { FC, useState } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import AnnouncementForm from "../../components/Announcements/AnnouncementForm";
import AnnouncementMenager from "../../components/Announcements/AnnouncementMenager";
import { useForm } from "react-hook-form";
import TerminalManager from "../../components/Terminal/TerminalManager";
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import AccessDeniedPage from "../auth/AccessDeniedPage";
import {createRef} from "react";
import UseSendDataApi from "../../hooks/API/useSendDataApi";
import UseFetchApi from "../../hooks/API/useFetchApi";

interface Data {
    type:string,
    title:string,
    description: string
}

const TerminalManagerPage: FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeTitle = (e:any) => setTitle(e.target.value);
    const handleChangeDescription = (e:any) => setDescription(e.target.value);

    const [status, setStatus] = useState()

const onOptionChange= (e:any)  => {
setStatus(e.target.value)
 }

    const submit = (e:any) => {
        e.preventDefault()
        const formData = {
            title,
            description,
        };
        sendData('http://localhost:8000/api/createEmergenciesData', formData)
    }


    const {user, token, role} = useStateContext();
    if (!token || (role !== 'Terminal Manager' && role !== 'Administrator')) {
        return <AccessDeniedPage onData={'Terminal Manager'}/>
    }

    const {dataError, sendData} = UseSendDataApi()
    const getStatus = UseFetchApi('http://localhost:8000/api/showStatus')
console.log(getStatus.data)
const currentStatus = () => {
if(getStatus.data !== null && getStatus.data !== undefined) {
    const terminalStatus = <span>{getStatus.data.Terminal}</span>
return terminalStatus
} else return <p>No data available</p>

}
    const setTerminalStatus = (e:any) => {
    e.preventDefault()
    const statusData = status
    const data = {
    status: statusData,
    part: 'terminal'
    }
    sendData('http://localhost:8000/api/updateStatus', data)
    }

    const showErrors = () => {
        if (dataError !== null && dataError.errors !== null) {
       const emergenciesErrors =  Object.values(dataError.errors).map((item:any) => {
        return <p>{item}</p>
         })
         return emergenciesErrors
        }

    }

    return (
        <div className="flex ">
            <DashboardInterface />
            <div className="flex flex-col w-9/12 items-center mx-auto p-8">
                <div className="mx-auto w-full h-24 bg-gray my-32 flex items-center justify-evenly rounded-md">
                    <p className="text-xl font-bold">Status: <span>{currentStatus()}</span></p>
                       <form className="flex w-1/2 items-center gap-4 " onSubmit={setTerminalStatus}>
                        <label className="uppercase font-bold text-xl">Open</label>
                        <input type="radio" name="status" value={'open'} onChange={onOptionChange}></input>
                        <label className="uppercase font-bold text-xl">Closed</label>
                        <input type="radio" name="status" value={'closed'} onChange={onOptionChange}></input>
                        <button className="bg-green p-2 px-8 text-white text-xl font-medium m-auto rounded-md hover:bg-blue transition-all">
                                Set Status
                            </button>
                       </form>
                </div>
                <div className="flex gap-10 w-full justify-center mx-auto mb-16">
                <div className="bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add an Announcement{" "}
                        </h2>
                        <AnnouncementForm/>
                    </div>
                    <div className="bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md">
                    <h2 className="mb-10 text-3xl font-medium w-full text-center bg-red-700 p-4 rounded-t-md text-white">Add Emergencies</h2>
                    <form className="flex flex-col w-9/12 gap-4" onSubmit={submit}>

    <label className="font-medium p-2 text-2xl text-center">
        Title
    </label>
    <input
        className="h-12 rounded-md font-medium p-2"
        type="text" onChange={handleChangeTitle}></input>
    <small className="text-danger text-red-700 font-medium text-sm">

    </small>
    <label className="font-medium p-2 text-2xl text-center">
        Description
    </label>
    <textarea className="h-12 rounded-md font-medium p-2 text-center" onChange={handleChangeDescription} ></textarea>
            <small className="text-danger text-red-700 font-medium text-sm">

    </small>
    <button
        className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all"
        type="submit"
    >
        Add
    </button>
    {showErrors()}
</form>
                    </div>
                </div>
             <div className="flex gap-10 m-4">
                 <div className="flex flex-col p-8 w-1/2 bg-gray items-center gap-4 rounded-md">
                        <AnnouncementMenager/>
                    </div>
                    <div className="flex flex-col p-8 w-1/2 bg-gray items-center gap-4 rounded-md">
                        <TerminalManager/>
                    </div>
             </div>
            </div>
        </div>
    );
};

export default TerminalManagerPage;
