const fetch = require("node-fetch");

module.exports = async(bearer_token) => {
    const data = await fetch(`https://discord.com/api/users/@me`, {
        headers: { 
            Authorization: `Bearer ${bearer_token}` 
        } 
    });
    const json = await data.json();
    return json;
}