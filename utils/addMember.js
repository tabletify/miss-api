const fetch = require("node-fetch");

module.exports = async(accessToken, guildID, userID) => {
    fetch(`https://discord.com/api/v7/guilds/${guildID}/members/${userID}`, {
        method: "PUT",
        body: JSON.stringify({ access_token: access_token }),
        
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bot ${config.token}`,
        },
    });
    return null;
}
