import { FC } from "react";
import UseFetchApi from '../../hooks/API/useFetchApi';
const AnnouncementHomePage:FC = () => {
    const fetchAnnouncements = UseFetchApi('http://localhost:8000/api/showAnnouncementsData')
 const announcementData:any = fetchAnnouncements.data;
    const announcementsList = () => {

if(announcementData !== undefined && announcementData !== null) {
    const announcement = announcementData.map((item:any) => {
return (
    <div>
        <p>Type: {item.type}</p>
        <p>Title: {item.title}</p>
        <p>Description: {item.description}</p>
    </div>
)
    })
    return announcement
}
    }

return (
  <div>
{announcementsList()}
  </div>
)
}

export default AnnouncementHomePage
