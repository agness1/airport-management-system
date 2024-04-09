import { FC } from "react";
import DashboardInterface from "../../components/layout/DashboardInterface";
import useGroundApi from "../../hooks/API/Ground/useGroundApi";
import { useForm } from "react-hook-form";
import axios from "axios";
import AnnouncementForm from "../../components/Announcements/AnnouncementForm";
import AnnouncementMenager from "../../components/Announcements/AnnouncementMenager";

interface Data {
    area: string;
    startDate: string;
    endDate: string;
    description: string;

}

const GroundMenagerPage: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Data>();

    const onSubmit = (data: any) => console.log(data);

    const registerOptions = {
        area: {
            required: "Area is required",
        },
        startDate: {
            required: "StartDate is required",
        },
        endDate: {
            required: "EndDate is required",
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

    };

    const groundApi = useGroundApi();

    const areaOfRenovationList = () => {
        const areas = groundApi.AreaOfRenovationdata;

        if (areas !== null) {
            const area = areas.area.map((item: any) => (
                  <option className="font-medium" value={item.id}>
                    {item.Area}
                </option>
            ));

            return area;
        } else return <option value="">No data available</option>;
    };

    const RenovationsList = () => {
        const renovations = groundApi.renovations;

        if (renovations !== null) {
            const renovation = renovations.map((item: any) => {
                return (
                    <div>
                        <div className="flex flex-col items-center gap-4 p-4">
                            <p className="text-xl font-medium">{item.area}</p>
                            <p className="text-center">{item.startDate}</p>
                            <p className="text-center">{item.endtDate}</p>
                            <p className="text-center">{item.description}</p>
                        </div>
                        <button className="bg-blue p-2 text-white text-xl font-medium w-1/3 m-auto rounded-md hover:bg-green transition-all" onClick={() => deleteRenovations(item.id)}>
                            Delete
                        </button>
                    </div>
                );
            });
            return renovation
        }
    };

    const sendRenovationData = async (data: any) => {
        try {
            await axios.post(
                "http://localhost:8000/api/getRenovationsData",
                data
            );
        } catch (error) {
            console.log(error);
        }
    };

    const deleteRenovations = async (id:string) => {
try {
    await axios.delete(`http://localhost:8000/api/renovation/${id}`)
} catch (error) {
    console.log(error)
}
    }

    return (
        <div className="flex">
            <DashboardInterface />

            <div className="flex flex-col w-9/12 items-center mx-auto p-8">
                <div className="flex gap-10 w-full justify-center mx-auto mb-8">
                    <div className="bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add Renowation Work
                        </h2>
                        <form
                            className="flex flex-col w-9/12 gap-4"
                            onSubmit={handleSubmit((data) => {
                                onSubmit(data);
                                sendRenovationData(data);
                            })}
                        >
                            <label className="font-medium p-2 text-2xl text-center">
                                Area of work
                            </label>
                            <select
                                className="h-12 rounded-md font-medium p-2"
                                {...register("area", registerOptions.area)}
                            >
                                {areaOfRenovationList()}
                            </select>
                            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.area && errors.area.message}
                            </small>
                            <label className="font-medium p-2 text-2xl text-center">
                                Start Date
                            </label>
                            <input
                                type="date"
                                className="h-12 rounded-md font-medium p-2 text-center"
                                {...register(
                                    "startDate",
                                    registerOptions.startDate
                                )}
                            ></input>
                            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.startDate && errors.startDate.message}
                            </small>
                            <label className="font-medium p-2 text-2xl text-center">
                                End Date
                            </label>
                            <input
                                type="date"
                                className="h-12 rounded-md font-medium p-2 text-center"
                                {...register(
                                    "endDate",
                                    registerOptions.endDate
                                )}
                            ></input>
                            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.endDate && errors.endDate.message}
                            </small>
                            <label className="font-medium p-2 text-2xl text-center  ">
                                Description
                            </label>
                            <textarea
                                className="h-16 rounded-md font-medium p-2"
                                {...register(
                                    "description",
                                    registerOptions.description
                                )}
                            ></textarea>
                            <small className="text-danger text-red-700 font-medium text-sm">
                                {errors?.description &&
                                    errors.description.message}
                            </small>
                            <button
                                className="bg-green p-4 mb-8 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-16 hover:bg-blue transition-all"
                                type="submit"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                    <div className=" bg-gray w-1/2 mx-auto my-32 flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Ground Status
                        </h2>
                        <h3 className="text-3xl font-medium mb-8">Runways</h3>

                        <form className="flex gap-8 m-4 items-center flex-wrap justify-center" >
                            <p className="uppercase font-bold text-2xl">
                                rwy l
                            </p>
                            <label className="font-medium text-xl text-green uppercase">
                                Open
                            </label>
                            <input type="radio" className="w-4 h-4"></input>
                            <label className="font-medium text-xl text-red-700 uppercase">
                                Closed
                            </label>
                            <input type="radio" className="w-4 h-4"></input>
                            <button className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">
                                Set Status
                            </button>
                        </form>
                        <form className="flex gap-8 m-4 items-center flex-wrap justify-center">
                            <p className="uppercase font-bold text-2xl">
                                rwy r
                            </p>
                            <label className="font-medium text-xl text-green uppercase">
                                Open
                            </label>
                            <input type="radio" className="w-4 h-4"></input>
                            <label className="font-medium text-xl text-red-700 uppercase">
                                Closed
                            </label>
                            <input type="radio" className="w-4 h-4"></input>
                            <button className="bg-green p-4 mb-4 text-white text-xl font-medium w-9/12 m-auto rounded-md mt-4 hover:bg-blue transition-all">
                                Set Status
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex gap-10 w-full justify-center mx-auto mb-16">
                    <div className="bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Add an Announcement{" "}
                        </h2>
                        <AnnouncementForm/>
                    </div>

                    <div className=" bg-gray w-1/2 mx-auto  flex flex-col items-center rounded-md ">
                        <h2 className="mb-10 text-3xl font-medium w-full text-center bg-black p-4 rounded-t-md text-white">
                            Menage Renowation Works
                        </h2>
                       {RenovationsList()}
                    </div>
                </div>
                <AnnouncementMenager/>
            </div>
        </div>
    );
};

export default GroundMenagerPage;
