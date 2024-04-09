import { FC } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAnnouncementApi from "../../hooks/API/Announcements/useAnnouncementApi";
interface Data {
    type:string,
    title:string,
    description: string
}

const AnnouncementForm:FC = () => {


const api = useAnnouncementApi()

console.log(api)

const announcementTypeList = () => {
    const announcementTypeList = api.AnnouncementTypedata;

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

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>();

    const onSubmit = (data: any) => console.log(data);

    const sendAnnouncementData = async (data: any) => {
        try {
            await axios.post(
                "http://localhost:8000/api/createAnnouncementsData",
                data
            );
        } catch (error) {
            console.log(error);
        }
    };

   
    const registerOptions = {
        type: {
            required: "Type is required",
        },
        title: {
            required: "Title is required",
            minLength: {
                value: 5,
                message: "Title must have at least 5 characters",
            },
            maxLength: {
                value: 20,
                message: "Title must have max 20 characters",
            },
        },
        description: {
            required: "Description is required",
            minLength: {
                value: 20,
                message: "Description must have at least 20 characters",
            },
            maxLength: {
                value: 250,
                message: "Description must have max 250 characters",
            },
        },

     }


return (
    <form className="flex flex-col w-9/12 gap-4" onSubmit={handleSubmit((data) => {
        onSubmit(data);
        sendAnnouncementData(data)
    })}>
        <label className="font-medium p-2 text-2xl text-center">Type</label>
        <select className="h-12 rounded-md font-medium p-2" {...register(
            "type",
            registerOptions.type)}>
          {announcementTypeList()}
        </select>
        <small className="text-danger text-red-700 font-medium text-sm">
        {errors?.type &&
            errors.type.message}
    </small>
    <label className="font-medium p-2 text-2xl text-center">
        Title
    </label>
    <input
        className="h-12 rounded-md font-medium p-2"
        type="text"
        {...register(
            "title",
            registerOptions.title
        )}
    ></input>
    <small className="text-danger text-red-700 font-medium text-sm">
        {errors?.title &&
            errors.title.message}
    </small>
    <label className="font-medium p-2 text-2xl text-center">
        Description
    </label>
    <textarea className="h-12 rounded-md font-medium p-2 text-center" {...register(
            "description",
            registerOptions.description)}></textarea>
            <small className="text-danger text-red-700 font-medium text-sm">
        {errors?.description &&
            errors.description.message}
    </small>
    <button
        className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all"
        type="submit"
    >
        Add
    </button>
</form>
)
}

export default AnnouncementForm

