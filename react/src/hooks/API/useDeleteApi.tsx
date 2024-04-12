import axios from "axios";

const DeleteApi = async (url: string, id: string) => {
    try {
        const response = await axios.delete(`${url}${id}`);
        window.location.reload();
        if (response.status === 200) {
            return { success: true, message: "Data successfully deleted" };
        } else {
            return { success: false, message: "Failed to delete data" };
        }
    } catch (error: any) {
        return { success: false, message: error.message };
    }
};
export default DeleteApi;
