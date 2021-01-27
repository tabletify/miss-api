const mongoose = require("mongoose");

module.exports = function(url) {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.on('connected',() => {
        console.log('[ DATABASE ] Successfull connected to Mongoose!')
    })
}