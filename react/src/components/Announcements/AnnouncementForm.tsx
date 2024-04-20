import { FC, useState } from "react";
import axios from "axios";
import UseFetchApi from '../../hooks/API/useFetchApi';
import UseSendDataApi from "../../hooks/API/useSendDataApi";

interface Data {
    type:string,
    title:string,
    description: string
}

const AnnouncementForm:FC = () => {
    const [type, setType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleChangeType = (e:any) => setType(e.target.value);
    const handleChangeTitle = (e:any) => setTitle(e.target.value);
    const handleChangeDescription = (e:any) => setDescription(e.target.value);

const announcementTypeListsData = UseFetchApi('http://localhost:8000/api/announcementType')

const announcementTypeList = () => {
    const announcementTypeList = announcementTypeListsData.data

    if(announcementTypeList !== null) {

        const type = announcementTypeList.type.map((item:any) => {
return (
    <option className="font-medium" value={item.id}>
                    {item.Type}
                </option>
)
        });
        return type;
    } else return <option value="">No data available</option>;
}

const {dataError, sendData} = UseSendDataApi()

    const submit = (e:any) => {
        e.preventDefault()
        const formData = {
            title,
            description,
            type,
        };
console.log(formData)
       // sendData('http://localhost:8000/api/createAnnouncementsData', formData)
    }


const test = async (e:any) => {
    e.preventDefault()
    const formData = {
        title,
        description,
        type,
    };
    console.log(formData)
try {
    await axios.post('http://localhost:8000/api/createAnnouncementsData', formData)
} catch (error:any) {
console.log(error)
}
}

    const showErrors = () => {
        if (dataError !== null && dataError.errors !== null) {
       const annoucementsErrors =  Object.values(dataError.errors).map((item:any) => {
        return <p>{item}</p>
         })
         return annoucementsErrors
        }

    }

return (
    <form className="flex flex-col w-9/12 gap-4" onSubmit={test} >
        <label className="font-medium p-2 text-2xl text-center">Type</label>
        <select className="h-12 rounded-md font-medium p-2"  onChange={handleChangeType}>
          {announcementTypeList()}
        </select>
        <small className="text-danger text-red-700 font-medium text-sm">
        {}
    </small>
    <label className="font-medium p-2 text-2xl text-center">
        Title
    </label>
    <input
        className="h-12 rounded-md font-medium p-2"
        type="text" onChange={handleChangeTitle}></input>
    <small className="text-danger text-red-700 font-medium text-sm">
        {}
    </small>
    <label className="font-medium p-2 text-2xl text-center">
        Description
    </label>
    <textarea className="h-12 rounded-md font-medium p-2 text-center" onChange={handleChangeDescription} ></textarea>
            <small className="text-danger text-red-700 font-medium text-sm">
        {}
    </small>
    <button
        className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all"
        type="submit"
    >
        Add
    </button>
    {showErrors()}
</form>
)
}

export default AnnouncementForm

