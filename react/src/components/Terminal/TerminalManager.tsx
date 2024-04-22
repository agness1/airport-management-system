import { FC } from "react";
import DeleteApi from '../../hooks/API/useDeleteApi';
import UseFetchApi from '../../hooks/API/useFetchApi';

const TerminalManager:FC = () => {

    const fetchemergencies = UseFetchApi('http://localhost:8000/api/showEmergenciesData')

    const deleteApi = async (url:string, id:string) => {
        const {message} = await DeleteApi(url,id)
        console.log(message)
    }
            const emergencyList = () => {
                const emergencies = fetchemergencies.data

                if (emergencies !== null) {
                    const emergency = emergencies.map((item: any) => {
                        return (
                            <div className="flex bg-white flex-col items-center gap-4 rounded-md ">
                            <p className="text-xl font-medium bg-red-700 w-full text-white text-center p-2 rounded-t-md">{item.title}</p>
                            <p className="text-center p-4">{item.description}</p>
                            <button className="bg-blue p-2 mb-4 text-white text-xl  font-medium lg:w-1/3  m-auto rounded-md hover:bg-green transition-all"onClick={() => deleteApi('http://localhost:8000/api/emergencies/', item.id)}>Delete</button>
                        </div>
                        );
                    });
                    return emergency
                }
            };

    return (
        <div className="flex flex-col lg:p-8 w-full  items-center gap-4 rounded-md">
        <h3 className="text-3xl font-medium mb-8">Emergencies</h3>
        {emergencyList()}

    </div>

    )

 }

 export default TerminalManager
