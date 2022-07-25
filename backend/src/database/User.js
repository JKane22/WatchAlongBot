const mongoose = require('mongoose');

const RequiredString = {
    type: String,
    required: true
}

const RequiredArray = { 
    type: Array,
    required: true
}

const UserSchema = new mongoose.Schema({
    discordId: RequiredString,
    discordUsername: RequiredString,
    discordDiscriminator: RequiredString,
    discordAvatar: RequiredString,
    discordEmail: RequiredString,
    discordGuilds: RequiredArray
});

module.exports = mongoose.model('User', UserSchema);