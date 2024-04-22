import { FC, useState, useEffect } from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";

const GroundHomePage: FC = () => {

    const [statusRwyL, setStatusRwyL] = useState()
    const [statusRwyR, setStatusRwyR] = useState()

    const getStatus = UseFetchApi('http://localhost:8000/api/showStatus')


    useEffect (() => {
        if(getStatus.data !== null && getStatus.data !== undefined) {
            setStatusRwyL(getStatus.data.RWYL)
            setStatusRwyR(getStatus.data.RWYR)
        }
    },[getStatus.data])

    const openStatus = () => {
        return (
            <>
         <p>Open</p>
            <div className="h-4 w-4 bg-green rounded-full"></div>
            </>
        )
            }
            const closedStatus = () => {
        return (
            <>
            <p>Closed</p>
               <div className="h-4 w-4 bg-red-600 rounded-full"></div>
               </>
        )
         }


const groundFetchData = UseFetchApi('http://localhost:8000/api/showRenovationsData')

 const areaOfRenovationData = groundFetchData.data

const renovationList =  () => {

if(areaOfRenovationData !== undefined && areaOfRenovationData !== null) {
    const renovations = areaOfRenovationData.map((item:any) => {
        return (
            <tr>
    <td className=" border-2 p-2  text-center">{item.area}</td>
    <td className=" border-2 p-2 text-center">{item.startDate}</td>
    <td className=" border-2 p-2 text-center">{item.endDate}</td>
    <td className=" border-2 p-2 text-center break-all">{item.description}</td>
</tr>
        )
    })
    return renovations
}
}

    return (
        <div className="mt-8 w-full">
            <div className=" w-11/12 flex gap-4 justify-center items-center mb-4 border-2 border-gray m-auto p-2 rounded-md">
                <p className="font-bold">RWY L</p>
                <p>Status:</p>
                {statusRwyL === 'open' ? openStatus() : closedStatus()}
            </div>
            <div className=" w-11/12 flex gap-4 justify-center items-center mb-4 border-2 border-gray m-auto p-2 rounded-md">
                <p className="font-bold">RWY R</p>
                <p>Status:</p>
                {statusRwyR === 'open' ? openStatus() : closedStatus()}
            </div>
            <table className="w-11/12 m-auto text-center bg-gray mb-8 ">
                    <caption className="font-medium pb-4 text-xl mt-4">Renovation works</caption>
                    <thead >
                        <tr className="bg-blue">
                            <th className="border-2 border-black text-white p-2">Area</th>
                            <th className="border-2 border-black text-white p-2">Start Date</th>
                            <th className="border-2 border-black text-white p-2">End Date</th>
                            <th className="border-2 border-black text-white p-2 ">Description</th>
                        </tr>
                    </thead>
                    <tbody>
{renovationList()}
</tbody>

            </table>

        </div>
    );
};

export default GroundHomePage;
