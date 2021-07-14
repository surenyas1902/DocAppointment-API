const mongoose = require('mongoose');

module.exports = mongoose.connect("mongodb://localhost:27017/company", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});