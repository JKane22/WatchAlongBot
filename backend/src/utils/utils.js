function getSameGuilds(userGuilds, botGuilds) {
    // Filter the userGuilds with the botGuilds and only return the guilds that are in both arrays
    return userGuilds.filter((guild) => botGuilds.find((botGuild) => (botGuild.id === guild.id) && (guild.permissions & 0x20) === 0x20));
}

module.exports = { getSameGuilds };