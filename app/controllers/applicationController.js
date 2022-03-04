const Application = require("../models/application");

createApplication = async (req, res) => {
    const body = req.body;
    if (!body) {
        res.status(400).json({
            message: "No body given",
        });
        return;
    }

    const application = new Application(body);
    application
    .save()
    .then(() => {
        res.status(200).json({
            id: application._id,
            message: "New application created",
        });
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: "There was an error creating your application"
        });
    })
};

getApplications = async (req, res) => {
    const applications = await Application.find();

    if (applications) {
        res.status(200).json({
            applications: applications,
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
        res.status(400).json({
            message: `invalid id ${id}`,
        });
    });

    if (res.statusCode == 400) return;

    if (application) {
        return res.status(200).json({
            data: application,
        });
    }

    return res.status(404).json({
        message: `No Application Found with id: ${id}`,
    });
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
    const id = req.params.id;

    const application = await Application.findById(id).catch(() => {
        res.status(404).json({
            message: `Application ${id} not found`,
        });
    });
    if (!application) {
        return res.status(201).json({
            message: `Application does not exist`,
        });
    }

    Application.deleteOne({ _id: application._id })
        .then(() => {
            return res.status(201).json({
                message: `Application deleted`,
            });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "There was an error deleting your application"
            });
        })
};

module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplication,
    deleteApplication,
};