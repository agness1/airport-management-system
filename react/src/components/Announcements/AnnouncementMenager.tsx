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
                            <div className="flex flex-col items-center gap-4 p-2">
                            <p className="text-xl font-medium">{item.type}</p>
                            <p className="text-xl font-medium">{item.title}</p>
                            <p className="text-center">{item.description}</p>
                            <button className="bg-blue p-2 text-white text-xl font-medium w-1/3 m-auto rounded-md hover:bg-green transition-all"onClick={() => deleteApi('http://localhost:8000/api/announcements/', item.id)}>Delete</button>
                        </div>
                        );
                    });
                    return announcement
                }
            };

    return (
        <div className="flex flex-col p-8 w-1/2 bg-gray items-center gap-4 rounded-md">
        <h3 className="text-2xl font-medium">Announcements</h3>
        {announcementList()}

    </div>

    )

    }
    export default AnnouncementMenager;
