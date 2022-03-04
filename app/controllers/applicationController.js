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
    const id = req.params.id;

    const application = await Application.findById(id).catch(() => {
        res.status(404).json({
            message: `No Application Found with ID ${id}`,
        });
    });

    if (application) {
        console.log("application found");
        res.status(200).json({
            data: application,
        });
    }
}

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

    const application = await Application.findById(id).catch(() => {
        res.status(404).json({
            message: `Application ${id} not found`,
        });
    });

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