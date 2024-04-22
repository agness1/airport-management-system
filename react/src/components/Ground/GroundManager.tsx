import { FC, useEffect, useState } from 'react'
import DeleteApi from '../../hooks/API/useDeleteApi';
import UseFetchApi from '../../hooks/API/useFetchApi';

const GroundManager: FC = () => {
    const fetchRenovations = UseFetchApi('http://localhost:8000/api/showRenovationsData')
    const deleteApi = async (url:string, id:string) => {
        const {message} = await DeleteApi(url,id)
        console.log(message)
    }
    const [data, setData] = useState<any>();

    const renovationData = fetchRenovations.data

    useEffect(() => {
    setData(renovationData)
    }, [renovationData])

    const renovationsList = () => {
        if(data !== undefined && data !== null) {
            const renovationData = data.map((item:any) => {
                return (

                    <div className="flex bg-white flex-col items-center gap-4 rounded-md ">
                        <p className="text-xl font-medium bg-red-700 w-full text-white text-center p-2 rounded-t-md">{item.area}</p>
                        <p className="text-center font-medium">{item.startDate}--{item.endDate}</p>
                        <p className="text-center break-all p-4">{item.description}</p>
<button  className="bg-blue p-2 mb-4 text-white text-xl  font-medium lg:w-1/3  m-auto rounded-md hover:bg-green transition-all" onClick={() => deleteApi('http://localhost:8000/api/renovation/', item.id)}>
                        Delete
                    </button>
                    </div>


                )
            })
            return renovationData
        } else return <h3>No data available</h3>
    }


    return (
      <div className="flex flex-col lg:p-8 w-full items-center gap-4 rounded-md p-4">
    {renovationsList()}
      </div>
    )
}

export default GroundManager
