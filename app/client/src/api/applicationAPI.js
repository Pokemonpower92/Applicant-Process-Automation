import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/applications" || "",
});

// Application apis.
export const createApplication = (payload) => api.post("", payload);
export const getApplications = () => api.get("");
export const updateApplication = (id, payload) => api.put(`/${id}`, payload);
export const getApplicationById = (id) => api.get(`/${id}`);
export const deleteApplication = (id) => api.delete(`/${id}`);

const applicationAPI = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};

export default applicationAPI;