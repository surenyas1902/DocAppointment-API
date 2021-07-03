const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());

app.listen(port, () => {
    console.log(`Server started listening to PORT: ${port}`)
})