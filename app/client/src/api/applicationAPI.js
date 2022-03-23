import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001" || "",
});

// Application apis.
export const createApplication = (payload) => api.post("/applications", payload);
export const getApplications = () => api.get("/applications");
export const updateApplication = (id, payload) => api.put(`/applications/${id}`, payload);
export const getApplicationById = (id) => api.get(`/applications/${id}`);
export const deleteApplication = (id) => api.delete(`/applications/${id}`);

const applicationAPI = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};

export default applicationAPI;