import { useState, useEffect } from 'react';
import axios from 'axios';

const useGroundApi = () => {
    const [AreaOfRenovationdata, setAreaOfRenovationdata] = useState(null);
    const [renovations, setRenovation] = useState(null);
    const [AreaError, setAreaError] = useState(null);
    const [RenovationError, setRenovationError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/areaOfRenovation');
                setAreaOfRenovationdata(response.data);
            } catch (error:any) {
setAreaError(error)
            }
        }
fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/showRenovationsData');
                setRenovation(response.data);
            } catch (error:any) {
setRenovationError(error)
            }
        }
fetchData()
    }, [])

    return {AreaOfRenovationdata, renovations, AreaError, RenovationError}
}


export default useGroundApi

