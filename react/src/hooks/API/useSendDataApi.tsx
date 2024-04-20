import { useState } from 'react';
import axios from 'axios';

const UseSendDataApi = () => {

    const [dataError, setDataError] = useState(null);

        const sendData = async (url:string, data:any) => {

            try {
               await axios.post(url, data);
                window.location.reload();
            } catch (error:any) {
                const response = error.response;
        if (error.response.status == 422) {
           setDataError(response.data)
         }

            }
        }
    return {dataError, sendData}
}


export default UseSendDataApi
