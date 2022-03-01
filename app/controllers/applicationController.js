const Application = require("../models/application");

createApplication = async (req, res) => {

};

getApplications = async (req, res) => {
    const applications = await Application.find();

    if (applications) {
        res.status(200).json({
            data: applications,
        });
    } else {
        res.status(404).json({
            message: `No Applications Found`,
        });
    }
};

getApplicationById = async (req, res) => {

};

updateApplication = async (req, res) => {

};

deleteApplication = async (req, res) => {

};

module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};