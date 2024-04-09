import { useState, useEffect } from 'react';
import axios from 'axios';

const useAnnouncementApi = () => {
    const [AnnouncementTypedata, setAnnouncementTypedata] = useState(null);
    const [announcements, setAnnouncement] = useState(null);
    const [AnnouncementError, setAnnouncementError] = useState(null);
    const [AnnouncementTypeError, setAnnouncementTypeError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/announcementType');
                setAnnouncementTypedata(response.data);
            } catch (error:any) {
setAnnouncementTypeError(error)
            }
        }
fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/showAnnouncementsData');
                setAnnouncement(response.data);
            } catch (error:any) {
setAnnouncementError(error)
            }
        }
fetchData()
    }, [])

    return {AnnouncementTypedata, announcements, AnnouncementError, AnnouncementTypeError}
}


export default useAnnouncementApi

