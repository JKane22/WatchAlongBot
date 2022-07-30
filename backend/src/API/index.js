const fetch = require('node-fetch');

async function getBotGuilds() {
    try {
        const response = await fetch('https://discordapp.com/api/users/@me/guilds', {
            headers: {
                'Authorization': `Bot ${process.env.BOT_TOKEN}`
            }
        })
        const guilds = await response.json();

        return guilds;
    } catch (err) {
        console.log(err)
        return ['Error fetching guilds'];
    }
}

module.exports = { getBotGuilds };