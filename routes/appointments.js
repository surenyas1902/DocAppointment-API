const express = require('express');
const Appointments = require('../models/appointments');

const router = express.Router();

router.get('/fetchAppointments/:appointmentDate', (req, res) => {
    const { appointmentDate } = req.params;
    const response = Appointments.find({ $expr: { $eq: ['1993-04-21', {$dateToString: { date:'$dob', format: '%Y-%m-%d' }}] } });
})

router.post('/addslots', (req, res) => {
    const slotData = req.body;
})

module.exports = router;