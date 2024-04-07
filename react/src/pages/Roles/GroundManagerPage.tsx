import { FC } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
const GroundMenagerPage: FC = () => {
    return (
        <div className="flex">
<DashboardInterface/>

    <div  className="flex flex-col w-9/12 items-center mx-auto p-8">
        <div className="flex gap-10 w-full justify-center mx-auto mb-8">

                <div className="bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
                <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Add Renowation Work</h2>
                    <form className="flex flex-col w-9/12 gap-4">
                        <label className="font-medium p-2 text-2xl text-center">Area of work</label>
                        <select className="h-12 rounded-md font-medium p-2" ></select>
                        <label  className="font-medium p-2 text-2xl text-center">Start Date</label>
                        <input type="date" className="h-12 rounded-md font-medium p-2 text-center"></input>
                        <label  className="font-medium p-2 text-2xl text-center">End Date</label>
                        <input type="date" className="h-12 rounded-md font-medium p-2 text-center"></input>
                        <label  className="font-medium p-2 text-2xl text-center  ">Description</label>
                        <textarea className="h-16 rounded-md font-medium p-2"></textarea>
                        <button className="bg-green p-4 mb-8 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all" type="submit">Add</button>
                    </form>
                </div>

            <div className=" bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
            <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Ground Status</h2>
            <h3 className="text-3xl font-medium mb-8">Runways</h3>

                <form className="flex gap-8 m-4 items-center flex-wrap justify-center">
                    <p className="uppercase font-bold text-2xl">rwy l</p>
                    <label className="font-medium text-xl text-green uppercase">Open</label>
                    <input type="radio" className="w-4 h-4"></input>
                    <label className="font-medium text-xl text-red-700 uppercase">Closed</label>
                    <input type="radio" className="w-4 h-4"></input>
                    <button  className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">Set Status</button>
                </form>
                <form className="flex gap-8 m-4 items-center flex-wrap justify-center">
                    <p className="uppercase font-bold text-2xl">rwy r</p>
                    <label className="font-medium text-xl text-green uppercase">Open</label>
                    <input type="radio" className="w-4 h-4"></input>
                    <label className="font-medium text-xl text-red-700 uppercase">Closed</label>
                    <input type="radio" className="w-4 h-4"></input>
                    <button  className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">Set Status</button>
                </form>

            </div>
        </div>
        <div className="flex gap-10 w-full justify-center mx-auto mb-16">

<div className="bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md">
<h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Add an Announcement </h2>
    <form className="flex flex-col w-9/12 gap-4">
        <label className="font-medium p-2 text-2xl text-center">Title</label>
        <input className="h-12 rounded-md font-medium p-2" type="text" ></input>
        <label  className="font-medium p-2 text-2xl text-center">Description</label>
        <textarea  className="h-12 rounded-md font-medium p-2 text-center"></textarea>
        <button className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all" type="submit">Add</button>
    </form>
</div>

<div className=" bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md ">
<h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">Menage Renowation Works</h2>
<div className="flex flex-col items-center gap-4 p-4">
                            <p className="text-xl font-medium">Title</p>
                            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure sit dolore id ab architecto reiciendis, molestiae magni obcaecati dolores cumque impedit eaque assumenda et quia sequi, eligendi dolor, vero atque!</p>
                        </div>
                        <button className="bg-blue p-2 text-white text-xl font-medium w-1/3 m-auto rounded-md hover:bg-green transition-all">Delete</button>



</div>
</div>
    </div>
</div>


    )
 }


export default GroundMenagerPage
