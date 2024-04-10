import { FC, useEffect, useState } from 'react'
import axios from 'axios';
import useGroundApi from '../../hooks/API/Ground/useGroundApi';
const GroundManager: FC = () => {

    const [data, setData] = useState<any>();

    const api = useGroundApi()

    const renovationData = api.renovations

    useEffect(() => {
    setData(renovationData)
    }, [renovationData])


    const deleteRenovations = async (id:string) => {
        try {
            await axios.delete(`http://localhost:8000/api/renovation/${id}`);
            window.location.reload();
        } catch (error) {
            console.error( error);
        }
    }

    const renovationsList = () => {
        if(data !== undefined && data !== null) {
            const renovationData = data.map((item:any) => {
                return (
                    <div>
                    <div className="flex flex-col items-center gap-4 p-4">
                        <p className="text-xl font-medium">{item.area}</p>
                        <p className="text-center">{item.startDate}</p>
                        <p className="text-center">{item.endDate}</p>
                        <p className="text-center">{item.description}</p>
                    </div>
                    <button className="bg-blue p-2 text-white text-xl font-medium w-1/3 m-auto rounded-md hover:bg-green transition-all" onClick={() => deleteRenovations(item.id)}>
                        Delete
                    </button>
                </div>
                )
            })
            return renovationData
        } else return <h3>No data available</h3>
    }




    return (
      <div className="bg-black w-full mx-auto  flex flex-col items-center rounded-b-md p-8 mt-32 ">
        <h2 className='text-white font-medium text-3xl m-2 mb-8'>Active Renovations</h2>
    {renovationsList()}
      </div>
    )
}

export default GroundManager
