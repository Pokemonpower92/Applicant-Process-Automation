const express = require("express");
const applicationController = require("../controllers/applicationController");
const application = express.Router();

application.post("/apply", applicationController.createApplication);
application.get("/", applicationController.getApplications);
application.get("/:id", applicationController.getApplicationById);
application.put("/:id/edit", applicationController.updateApplication);
application.delete("/:id", applicationController.deleteApplication);

module.exports = application;