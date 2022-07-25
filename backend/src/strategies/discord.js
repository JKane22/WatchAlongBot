const passport = require('passport');
const DiscordStrategy = require('passport-discord');

// Mongo Database Model
const User = require('../database/User');

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
    done(null, user.discordId);
});
passport.deserializeUser(async (discordId, done) => {
    try {
        const user = await User.findOne({ discordId });
        return user ? done(null, user) : done(null, false);
    } catch (err) {
        console.log(err)
        return done(err, false);
    };
})

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email', 'profile', 'guilds']
}, (accessToken, refreshToken, profile, done) => {
    const { id, username, discriminator, email, avatar, guilds } = profile;

    // Check for existing user
    User.findOne({ discordId: id }, (err, user) => {
        if (err) {
            return done(err, false)
        };

        if (user) {
            console.log(`Found existing user: ${user.discordUsername}`);
            User.findOneAndUpdate({ discordId: id }, {
                discordUsername: username,
                discordDiscriminator: discriminator,
                discordAvatar: avatar,
                discordEmail: email,
                discordGuilds: guilds
            }, (err, user) => {
                if (err) {
                    return done(err, false)
                }
                return done(null, user)
            });
        } else {
            const newUser = new User({ 
                discordId: id, 
                discordUsername: username,
                discordDiscriminator: discriminator,
                discordAvatar: avatar,
                discordEmail: email,
                discordGuilds: guilds
            })

            newUser.save();
            return done(null, newUser)
        };
    });
}));