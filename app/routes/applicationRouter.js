const express = require("express");
const applicationController = require("../controllers/applicationController");
const application = express.Router();

application.post("/", applicationController.createApplication);
application.get("/", applicationController.getApplications);
application.get("/:id", applicationController.getApplicationById);
application.put("/:id", applicationController.updateApplication);
application.delete("/:id", applicationController.deleteApplication);

module.exports = application;