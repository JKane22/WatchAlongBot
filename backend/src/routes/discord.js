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

        // Guilds that bot isn't in but can be added to with the users permissions
        const userGuildsBotNotIncluded = userGuilds.filter(guild => !sameGuilds.includes(guild) && (guild.permissions & 0x20) === 0x20);
        res.send([userGuildsBotNotIncluded, sameGuilds]);
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
            guildIcon: data.icon ? data.icon : null,
            guildWatchAlong: { 
                "Watching": false,
                "Queue": [],
                "HostName": null,
                "HostId": null
            }
        });
        await newGuild.save();

        res.sendStatus(200);
    };

    if (guild) {
        if (data.name !== guild.guildName || data.icon !== guild.guildIcon) {
            const updatedGuild = await Guild.findOneAndUpdate({ guildId: data.id }, {
                guildName: data.name,
                guildIcon: data.icon ? data.icon : null
            })

            await updatedGuild.save();
        };

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

// Updating the Room Status in the Database 
router.get('/update/roomStatus', async (req, res) => {
    const data = req.query;

    // Find the guild in the database
    const guild = await Guild.findOneAndUpdate({ guildId: data.guildId }, {
        guildWatchAlong: { 
            "Watching": data.status,
            "Queue": [],
            "HostName": data.hostName,
            "HostId": data.hostId
        }
    })

    guild.save()
    res.sendStatus(200);
})

// Checking the Room Status in the Database
router.get('/check/roomStatus', async (req, res) => {
    const data = req.query;

    // Find the guild in the database
    const guild = await Guild.findOne({ guildId: data.guildId });

    if (guild.guildWatchAlong.Watching === true) {
        res.sendStatus(200)
    } else { 
        res.sendStatus(204)
    };
})

// Checking Guild Queue
router.get('/check/queue', async (req, res) => {
    const data = req.query;

    // Find the guild in the database
    const guild = await Guild.findOne({ guildId: data.guildId });

    if (guild.guildWatchAlong.Queue.length > 0) {
        res.send(guild.guildWatchAlong.Queue)
    } else {
        res.send([])
    };
})

// Added to the a new Guild
router.get('/added', (req, res) => {
    const data = req.query;

    res.redirect(`http://localhost:3000/dashboard/${data.guild_id}`);
});


module.exports = router;