const express = require("express");
const app = new express();
const generateToken = require("./utils/generateToken");
const config = require("./config/config");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const User = require("./data/User");
const getUser = require("./utils/getUser");

app.use(require('express-session')(require("./config/oauth2.json").session));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("html/src"));

//
const main = require("./routers/main");
const api = require("./routers/api");
const oauth2 = require("./routers/oauth");
app.use('/', main)
app.use('/api', api)
app.use('/oauth', oauth2)
//

require("./utils/connectdb")(config.database.url);

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`[ SERVER ] Сервер успешно запустился на порту ${port}`);
})
