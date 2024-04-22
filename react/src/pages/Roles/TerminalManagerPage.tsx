import { FC, useState } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import AnnouncementForm from "../../components/Announcements/AnnouncementForm";
import AnnouncementMenager from "../../components/Announcements/AnnouncementMenager";
import TerminalManager from "../../components/Terminal/TerminalManager";
import { useStateContext } from "../../contexts/ContextProvider";
import AccessDeniedPage from "../auth/AccessDeniedPage";
import UseSendDataApi from "../../hooks/API/useSendDataApi";
import UseFetchApi from "../../hooks/API/useFetchApi";
import FormValidaionError from "../../components/layout/FormValidaionError";

const TerminalManagerPage: FC = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeTitle = (e: any) => setTitle(e.target.value);
    const handleChangeDescription = (e: any) => setDescription(e.target.value);

    const [status, setStatus] = useState();

    const onOptionChange = (e: any) => {
        setStatus(e.target.value);
    };

    const submit = (e: any) => {
        e.preventDefault();
        const formData = {
            title,
            description,
        };
        sendData("http://localhost:8000/api/createEmergenciesData", formData);
    };

    const {token, role } = useStateContext();
    if (!token || (role !== "Terminal Manager" && role !== "Administrator")) {
        return <AccessDeniedPage onData={"Terminal Manager"} />;
    }

    const { dataError, sendData } = UseSendDataApi();
    const getStatus = UseFetchApi("http://localhost:8000/api/showStatus");
    console.log(getStatus.data);
    const currentStatus = () => {
        if (getStatus.data !== null && getStatus.data !== undefined) {
            const terminalStatus = <span>{getStatus.data.Terminal}</span>;
            return terminalStatus;
        } else return <p>No data available</p>;
    };
    const setTerminalStatus = (e: any) => {
        e.preventDefault();
        const statusData = status;
        const data = {
            status: statusData,
            part: "terminal",
        };
        sendData("http://localhost:8000/api/updateStatus", data);
    };

    return (
        <div className="flex ">
            <DashboardInterface />
            <div className="flex flex-col lg:w-9/12 w-11/12 items-center mx-auto lg:p-8">
                <div className="mx-auto w-full lg:h-24 bg-gray my-32 flex flex-col lg:flex-row items-center justify-evenly rounded-md p-2">
                    <p className="text-xl font-bold flex gap-4">
                        Status: <span>{currentStatus()}</span>
                    </p>
                    <form
                        className="flex flex-wrap lg:w-1/2 items-center justify-center gap-4 p-2"
                        onSubmit={setTerminalStatus}
                    >
                        <label className="uppercase font-bold text-xl">
                            Open
                        </label>
                        <input
                            type="radio"
                            name="status"
                            value={"open"}
                            onChange={onOptionChange}
                        ></input>
                        <label className="uppercase font-bold text-xl">
                            Closed
                        </label>
                        <input
                            type="radio"
                            name="status"
                            value={"closed"}
                            onChange={onOptionChange}
                        ></input>
                        <button className="bg-green p-2 px-8 text-white text-xl font-medium m-auto rounded-md hover:bg-blue transition-all">
                            Set Status
                        </button>
                    </form>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 w-full justify-center mb-16">
                    <div className="bg-gray lg:w-1/2 flex flex-col items-center rounded-md">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add an Announcement{" "}
                        </h2>
                        <AnnouncementForm />
                    </div>
                    <div className="bg-gray lg:w-1/2 w-full flex flex-col items-center rounded-md">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-red-700 p-4 rounded-t-md text-white">
                            Add Emergencies
                        </h2>
                        <form
                            className="flex flex-col lg:w-9/12  w-full gap-4"
                            onSubmit={submit}
                        >
                            <label className="font-medium p-2 text-2xl text-center">
                                Title
                            </label>
                            <input
                                className="h-12 rounded-md font-medium p-2 m-4 lg:m-0"
                                type="text"
                                onChange={handleChangeTitle}
                            ></input>
                            <small className="text-danger text-red-700 font-medium text-sm"></small>
                            <label className="font-medium p-2 text-2xl text-center">
                                Description
                            </label>
                            <textarea
                                className="h-12 rounded-md font-medium p-2 text-center m-4 lg:m-0"
                                onChange={handleChangeDescription}
                            ></textarea>
                            <small className="text-danger text-red-700 font-medium text-sm"></small>
                            <button
                                className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all"
                                type="submit"
                            >
                                Add
                            </button>
                            <FormValidaionError errors={dataError}/>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 m-4">
                    <div className="flex flex-col lg:p-8 p-4 lg:w-1/2 bg-gray items-center gap-4 rounded-md">
                        <AnnouncementMenager />
                    </div>
                    <div className="flex flex-col lg:p-8 p-4 lg:w-1/2 w-full bg-gray items-center gap-4 rounded-md">
                        <TerminalManager />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalManagerPage;
