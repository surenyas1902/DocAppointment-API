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
    appointmentDate: {
        type: Date,
        required: true
    },
    appointmentStartTime: {
        type: Number,
        required: true
    },
    appointmentEndTime: {
        type: Number,
        required: true
    }
});

const Appointments = mongoose.model('Appointments', AppointmentSchema);

module.exports = Appointments;