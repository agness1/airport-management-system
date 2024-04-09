import { useState, useEffect } from 'react';
import axios from 'axios';

const useTerminalApi = () => {

    const [emergencies, setEmergencies] = useState(null);

    const [emergenciesError, setEmergenciesError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/showEmergenciesData');
                setEmergencies(response.data);
            } catch (error:any) {
                setEmergenciesError(error)
            }
        }
fetchData()
    }, [])



    return {emergencies, emergenciesError }
}


export default useTerminalApi
