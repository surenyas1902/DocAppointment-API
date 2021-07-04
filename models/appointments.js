const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: false
    },
    contactNumber: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    appointmentStartTime: {
        type: Date,
        required: true
    },
    appointmentEndTime: {
        type: Date,
        required: true
    }
});

const Appointments = mongoose.model('Appointments', AppointmentSchema);

module.exports = Appointments;