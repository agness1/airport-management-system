import { useState, useEffect } from 'react';
import axios from 'axios';

const useFlightOperationApi = () => {
    const [flightResourcesData, setFlightResourcesData] = useState(null);
    const [flightOperations, setFlightOperation] = useState(null);
    const [flightResourcesError, setflightResourcesError] = useState(null);
    const [flightOperationError, setflightOperationError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/flightData');
                setFlightOperation(response.data);
            } catch (error:any) {
setflightOperationError(error)
            }
        }
fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/flightResourcesData');
                setFlightResourcesData(response.data);
            } catch (error:any) {
setflightResourcesError(error)
            }
        }
fetchData()
    }, [])

    return {flightResourcesData, flightOperations, flightOperationError, flightResourcesError}
}


export default useFlightOperationApi
