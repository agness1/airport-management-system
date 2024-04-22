import { FC } from "react";
import UseFetchApi from "../../hooks/API/useFetchApi";
const AnnouncementHomePage: FC = () => {
    const fetchAnnouncements = UseFetchApi(
        "http://localhost:8000/api/showAnnouncementsData"
    );
    const announcementData: any = fetchAnnouncements.data;
    const announcementsList = () => {
        if (announcementData !== undefined && announcementData !== null) {
            const announcement = announcementData.map((item: any) => {
                return (
                    <div className="flex flex-col items-center gap-4 bg-gray w-11/12 m-auto border-2 border-blue shadow-lg my-4 text-black font-medium text-lg rounded-md">
                        <p className="bg-blue w-full text-white text-center p-2">
                            {item.type}
                        </p>
                        <p>{item.title}</p>
                        <p className="break-words w-full py-2 px-16">
                            {item.description}
                        </p>
                    </div>
                );
            });
            return announcement;
        }
    };
    return <div>{announcementsList()}</div>;
};
export default AnnouncementHomePage;
