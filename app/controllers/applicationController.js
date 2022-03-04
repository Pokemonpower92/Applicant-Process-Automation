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
    const id = req.params.id;
    const body = req.body;

    if (!id) {
        res.status(400).json({
            message: "No id given",
        });
        return;
    }
    if (!body) {
        res.status(400).json({
            message: "No body given",
        });
        return;
    }

    let serverErrorFlag = false;
    const application = await Application.findById(id).catch(() => {
        serverErrorFlag = true;
        res.status(404).json({
            message: `Unexpected id format: ${id}`,
        });
    });

    if (serverErrorFlag) {
        return;
    }

    if (application) {
        application.name = body.name;
        application.studentId = body.studentId;
        application.streetAddress = body.streetAddress;
        application.city = body.city;
        application.state = body.state;
        application.zipCode = body.zipCode;
        application.citizen = body.citizen;
        application.previousExperience = body.previousExperience;
        application.militaryExperience = body.militaryExperience;
        application.contactPhone = body.contactPhone;
        application.phoneNumber = body.phoneNumber;

        application.save()
            .then(() => {
                return res.status(200).json({
                    data: application,
                });
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: "There was an error updating your application"
                });
            })
    } else {
        res.status(404).json({
            message: `Application ${id} not found`,
        });
    }
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