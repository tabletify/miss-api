const express = require('express');
const router = express.Router();
const obj = require("../config/endpoints.json");
const random = require("../utils/random.js");
const User = require("../data/User");
const getUser = require("../utils/getUser");
const generateToken = require("../utils/generateToken");
const config = require("../config/config");

router.get("/", (req, res) => {
    res.sendFile("index.html", { root: "html" })
})

router.get("/support", (req, res) => {
    res.redirect(config.config.discordSupport)
})

router.get("/api_key", async(req, res) => {
    let discordUser = await getUser(req.session.bearer_token);
    if(!discordUser.id) return res.redirect("/oauth")
    let user = await User.findOne({ uid: discordUser.id }).lean()
    let result = { api_key: null };
    if(!user) {
        let token = `User ${Date.now()}.${generateToken()}`;
        result.api_key = token;
        User.create({ uid: discordUser.id, api_key: token });
    }else{
        result.api_key = user.api_key;
    }
    return res.json(result);
})

router.get("/endpoints", (req, res) => {
    res.sendFile("endpoints.json", { root: "config" })
})

router.get("/ping", (req, res) => res.send("Pong!"));


module.exports = router;
