import { FC } from "react";
import useAnnouncementApi from "../../hooks/API/Announcements/useAnnouncementApi";

const AnnouncementHomePage:FC = () => {
    const api = useAnnouncementApi();
    const announcementData:any = api.announcements;

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
