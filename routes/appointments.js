const express = require('express');
const Appointments = require('../models/appointments');

const router = express.Router();

router.get('/fetchAppointments/:appointmentDate', async (req, res) => {
    const { appointmentDate } = req.params;
    const response = await Appointments.find({ $expr: { $eq: [appointmentDate, {$dateToString: { date:'$appointmentDate', format: '%Y-%m-%d' }}] } });
    res.json(response);
})

router.post('/addslots', async (req, res) => {
    const {appointmentDate, appointmentStartTime, appointmentEndTime } = req.body;

    const response = await Appointments.findOne({ appointmentStartTime: {$gte: appointmentStartTime, $lte: appointmentEndTime}, $expr: { $eq: [appointmentDate, {$dateToString: { date:'$appointmentDate', format: '%Y-%m-%d' }}] }})
    if (response) {
        res.status(500).json(response);
    }
    const appoints = new Appointments(req.body);
    await appoints.save();
    res.status(200).json(appoints)
})

module.exports = router;