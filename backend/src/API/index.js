const fetch = require('node-fetch');

async function getBotGuilds() {
    // Fetch the bots guilds 
    const response = await fetch('https://discordapp.com/api/users/@me/guilds', {
        headers: {
            'Authorization': `Bot ${process.env.BOT_TOKEN}`
        }
    });
    const guilds = await response.json();
    return guilds;
}

module.exports = { getBotGuilds };