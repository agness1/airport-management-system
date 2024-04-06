import { FC } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import Switch from "@mui/material/Switch";
const TerminalMenagerPage: FC = () => {
    return (
        <div className="flex ">
            <DashboardInterface />
            <div className="flex flex-col w-9/12 items-center mx-auto p-2">
                <div className="mx-auto w-1/3 h-16 bg-gray my-32 flex items-center justify-evenly rounded-md">
                    <p className="text-xl font-bold">Status</p>
                    <div className="flex items-center gap-2">
                        <p className="font-medium">Closed</p>
                        <Switch />
                        <p className="font-medium">Open</p>
                    </div>
                </div>
                <div className="flex gap-10 w-full justify-center mx-auto">
                    <div className="bg-green p-8 w-1/2 rounded-md">
                        <h2 className=" text-slate-950 text-3xl font-medium mb-10 text-center">Add an Announcement</h2>
                        <form className="flex flex-col gap-8 ">
                            <label className="text-center text-2xl text-white font-medium">Title</label>
                            <input type="text" className=" bg-gray h-12 rounded-md text-center border-black border-2"></input>
                            <label className="text-center text-2xl text-white font-medium">Announcement</label>
                            <textarea className=" bg-gray rounded-md p-2 border-black border-2"></textarea>
                            <button className="bg-blue p-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-gray hover:text-black transition-all" type="submit">Add</button>
                        </form>
                    </div>
                    <div className="bg-green  p-8 w-1/2 rounded-md">
                    <h2 className="text-3xl text-slate-950  font-medium mb-10 text-center">Add Emergencies</h2>
                    <form className="flex flex-col gap-8 ">
                            <label className="text-center text-white text-2xl font-medium">Title</label>
                            <input type="text" className="h-12 rounded-md bg-gray text-center border-black border-2"></input>
                            <label className="text-center text-white text-2xl font-medium">Description</label>
                            <textarea className="rounded-md p-2 bg-gray border-black border-2"></textarea>
                            <button className="bg-blue p-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-gray hover:text-black transition-all" type="submit">Add</button>
                        </form>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default TerminalMenagerPage;
