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
                            <div className="flex flex-col items-center gap-4 p-2">
                            <p className="text-xl font-medium">{item.title}</p>
                            <p className="text-center">{item.description}</p>
                            <button className="bg-blue p-2 text-white text-xl font-medium w-1/3 m-auto rounded-md hover:bg-green transition-all"onClick={() => deleteApi('http://localhost:8000/api/emergencies/', item.id)}>Delete</button>
                        </div>
                        );
                    });
                    return emergency
                }
            };

    return (
        <div className="flex flex-col p-8 w-1/2 bg-gray items-center gap-4 rounded-md">
        <h3 className="text-2xl font-medium">Emergencies</h3>
        {emergencyList()}

    </div>

    )

 }

 export default TerminalManager
