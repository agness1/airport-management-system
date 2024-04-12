import { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetchApi = (url:string) => {

    const [data, setdata] = useState(null);

    const [dataError, setDataError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setdata(response.data);
            } catch (error:any) {
                setDataError(error)
            }
        }
fetchData()
    }, [])



    return {data, dataError }
}


export default UseFetchApi
