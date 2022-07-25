const router = require('express').Router();

// Backend API
const { getBotGuilds } = require('../API/index');

// User Database Model
const User = require('../database/User');
const Guild = require('../database/Guild');

// Utils
const { getSameGuilds } = require('../utils/utils');

router.get('/guilds', async (req, res) => {
    const guildsFetched = await getBotGuilds();

    // Find User from Database
    const user = await User.findOne({ discordId: req.user.discordId });
    if (user) {
        const userGuilds = user.get('discordGuilds');
        const sameGuilds = getSameGuilds(userGuilds, guildsFetched);
        res.send(sameGuilds);
    } else {
        res.send(401);
    };
});

// Create the user in the database
router.get('/guild/create', async (req, res) => {
    const data = JSON.parse(req.query.guild);

    // Try and find that guild in the database
    const guild = await Guild.findOne({ guildId: data.id });

    // If it doesn't exist, create it
    if (!guild) {
       const newGuild = new Guild({ 
            guildId: data.id, 
            guildName: data.name,
            guildIcon: data.icon ? data.icon : null
        });
        await newGuild.save();

        res.sendStatus(200);
    };

    if (guild) {
        res.sendStatus(200);
    };
})

// Find the User in the Database
router.get('/guild/:id', async (req, res) => {
    // grab the id from the url request
    const guildId = req.params.id;

    // Some reason we get a 'Create' string
    if (guildId === 'create') {
        return;
    }

    const guild = await Guild.findOne({ guildId: guildId });

    if (guild) {
        res.send(guild);
    };
});

module.exports = router;