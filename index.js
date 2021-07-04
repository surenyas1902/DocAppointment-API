const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const doctorsRoute = require('./routes/appointments');
const mongoConn = require('./db/connection')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(helmet());
app.use(cors());

app.use('/doctors', doctorsRoute);

mongoConn.then(() => {
    console.log("MongoDB instance connected");
    app.listen(port, () => {
        console.log(`Server started listening to PORT: ${port}`)
    })
})
