import { FC } from "react";
import useFetchApi from "../../hooks/API/useFetchApi";

const GroundHomePage: FC = () => {

const groundFetchData = useFetchApi('http://localhost:8000/api/showRenovationsData')

 const areaOfRenovationData = groundFetchData.data

const renovationList =  () => {

if(areaOfRenovationData !== undefined && areaOfRenovationData !== null) {
    const renovations = areaOfRenovationData.map((item:any) => {
        return (
            <tr>
    <td className=" border-2 p-2  text-center">{item.area}</td>
    <td className=" border-2 p-2 text-center">{item.startDate}</td>
    <td className=" border-2 p-2 text-center">{item.endDate}</td>
    <td className=" border-2 p-2 text-center">{item.description}</td>
</tr>
        )
    })
    return renovations
}
}

    return (
        <div className="mt-8 ">
            <table className="w-11/12 h-5/6 m-auto p-2 text-center bg-gray mb-8 ">

                    <caption className="font-medium pb-4 text-lg">Renovation works</caption>
                    <thead>
                        <tr className="bg-blue" >
                            <th className="border-2 border-black text-white p-2">Area</th>
                            <th className="border-2 border-black text-white p-2">Start Date</th>
                            <th className="border-2 border-black text-white p-2">End Date</th>
                            <th className="border-2 border-black text-white p-2">Description</th>
                        </tr>
                    </thead>
                    <tbody>
{renovationList()}
</tbody>

            </table>
            <div className=" w-3/5 flex gap-4 justify-center items-center mb-4 border-2 border-gray m-auto p-2 rounded-md">
                <p className="font-bold">RWY L</p>
                <p>Status:</p>
                <p className="font-medium">Open</p>
    <div className="h-4 w-4 bg-green rounded-full"></div>
            </div>
            <div className=" w-3/5 flex gap-4 justify-center items-center mb-4 border-2 border-gray m-auto p-2 rounded-md">
                <p className="font-bold">RWY R</p>
                <p>Status:</p>
                <p className="font-medium">Open</p>
    <div className="h-4 w-4 bg-green rounded-full"></div>
            </div>
        </div>
    );
};

export default GroundHomePage;
