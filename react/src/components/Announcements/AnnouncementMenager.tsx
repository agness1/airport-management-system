import { FC } from "react";
import DeleteApi from '../../hooks/API/useDeleteApi';
import UseFetchApi from '../../hooks/API/useFetchApi';
const AnnouncementMenager:FC = () => {

const fetchAnnouncements = UseFetchApi('http://localhost:8000/api/showAnnouncementsData')
    const deleteApi = async (url:string, id:string) => {
        const {message} = await DeleteApi(url,id)
        console.log(message)
    }
            const announcementList = () => {
                const announcements = fetchAnnouncements.data;

                if (announcements !== null) {
                    const announcement = announcements.map((item: any) => {
                        return (
                            <div className="flex flex-col w-11/12 items-center gap-4 bg-white rounded-md">
                            <p className="text-xl font-medium bg-black w-full text-white text-center p-2 rounded-t-md">{item.type}</p>
                            <p className="text-xl font-medium">{item.title}</p>
                            <p className="text-center break-all p-4">{item.description}</p>
                            <button className="bg-blue p-2 mb-4 text-white text-xl font-medium lg:w-1/3 m-auto rounded-md hover:bg-green transition-all"onClick={() => deleteApi('http://localhost:8000/api/announcements/', item.id)}>Delete</button>
                        </div>
                        );
                    });
                    return announcement
                }
            };

    return (
        <div className="flex w-full flex-col lg:p-8  bg-gray items-center gap-8 rounded-md">
        <h3 className="text-3xl font-medium mb-8">Announcements</h3>
        {announcementList()}

    </div>

    )

    }
    export default AnnouncementMenager;
