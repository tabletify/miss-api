const express = require('express');
const router = express.Router();
const obj = require("../config/endpoints.json");
const random = require("../utils/random.js");
const User = require("../data/User");
const getUser = require("../utils/getUser");

router.get("*", async(req, res, next) => {
    let user = await User.findOne({ api_key: req.headers.authorization }).lean()
    if(!user) return res.json({ code: 401, message: "Unauthorized user", image: null })
    next()
})

router.get("/v2/:id", (req, res) => {
    const id = req.params.id;
    let json = { code: 404, message: `Non-existent endpoint`, image: null }
    for (let prop in obj) {
        let result = Object.keys(obj[prop]).includes(id);
        if(result == true) {
            json = { code: 200, message: "", image: random(id) }
            break;
        }
    }
    res.json(json)
})

module.exports = router;
