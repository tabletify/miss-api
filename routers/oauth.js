const express = require('express');
const router = express.Router();
const config = require("../config/oauth2");
const FormData = require('form-data');
const fetch = require("node-fetch");
const getUser = require("../utils/getUser");
const addMember = require("../utils/addMember");

router.get("/", (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${config.oauth2.client_id}&redirect_uri=${encodeURIComponent(config.oauth2.redirect_uri)}&response_type=code&scope=${encodeURIComponent(config.oauth2.scopes.join(" "))}`)
})

router.get("/callback", async (req, res) => {
    const accessCode = req.query.code;
    if (!accessCode) return res.send('No access code specified');

    const data = new FormData();
    data.append('client_id', config.oauth2.client_id);
    data.append('client_secret', config.oauth2.secret);
    data.append('grant_type', 'authorization_code');
    data.append('redirect_uri', config.oauth2.redirect_uri);
    data.append('scope', 'identify');
    data.append('code', accessCode);

    const json = await (await fetch('https://discord.com/api/oauth2/token', { method: 'POST', body: data })).json();
    req.session.bearer_token = json.access_token;

    const user = await getUser(req.session.bearer_token);

   	addMember(req.session.bearer_token, `732115887246671913`, user.id);

    res.redirect('/api_key');
});

module.exports = router;
