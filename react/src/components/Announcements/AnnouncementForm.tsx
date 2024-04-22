import { FC, useState } from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";
import UseSendDataApi from "../../hooks/API/useSendDataApi";
import FormValidaionError from "../layout/FormValidaionError";

const AnnouncementForm: FC = () => {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleChangeType = (e: any) => setType(e.target.value);
    const handleChangeTitle = (e: any) => setTitle(e.target.value);
    const handleChangeDescription = (e: any) => setDescription(e.target.value);

    const announcementTypeListsData = UseFetchApi(
        "http://localhost:8000/api/announcementType"
    ) as { data: { type: { id: string; Type: string }[] } | null };

    const announcementTypeList =  () => {
        const announcementTypeList = announcementTypeListsData.data;

        if (announcementTypeList !== null) {
            const type = announcementTypeList.type.map((item: any) => {
                return (
                    <option className="font-medium" value={item.id}>
                        {item.Type}
                    </option>
                );
            });
            return type;
        } else return <option value="">No data available</option>;
    };

    const { dataError, sendData } = UseSendDataApi();

    const submit = (e: any) => {
        e.preventDefault();
        const formData = {
            title,
            description,
            type,
        };
        console.log(formData);
        sendData("http://localhost:8000/api/createAnnouncementsData", formData);
    };

    return (
        <form
            className="flex flex-col lg:w-9/12 gap-4 w-full"
            onSubmit={submit}
        >
            <label className="font-medium p-2 text-2xl text-center">Type</label>
            <select
                className="h-12 rounded-md font-medium p-2 m-4 lg:m-0"
                onChange={handleChangeType}
            >
                {announcementTypeList()}
            </select>
            <label className="font-medium p-2 text-2xl text-center">
                Title
            </label>
            <input
                className="h-12 rounded-md font-medium p- m-4 lg:m-0"
                type="text"
                onChange={handleChangeTitle}
            ></input>
            <label className="font-medium p-2 text-2xl text-center">
                Description
            </label>
            <textarea
                className="h-12 rounded-md font-medium p-2 text-center m-4 lg:m-0"
                onChange={handleChangeDescription}
            ></textarea>
            <button
                className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all"
                type="submit"
            >
                Add
            </button>
            <FormValidaionError errors={dataError} />
        </form>
    );
};

export default AnnouncementForm;
