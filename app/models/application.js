const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    netId: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zipCode: {
        type: String,
        required: false
    },
    citizen: {
        type: Boolean,
        required: true
    },
    previousExperience: {
        type: Boolean,
        required: true
    },
    previousExperienceDetails: {
        type: String,
        required: false
    },
    militaryExperience: {
        type: Boolean,
        required: false
    },
    militaryExperienceDetails: {
        type: String,
        required: false
    },
    contactPhone: {
        type: Boolean,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

const Application = mongoose.model('application', ApplicationSchema);
module.exports = Application;