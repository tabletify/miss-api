const mongoose = require("mongoose");

const schema = mongoose.Schema({
    uid: String,
    api_key: String,
});

module.exports = mongoose.model("User", schema)