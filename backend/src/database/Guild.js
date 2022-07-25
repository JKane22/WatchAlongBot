const mongoose = require('mongoose');

const RequiredString = {
    type: String,
    required: true
}

const NotRequiredString = {
    type: String,
    required: false
}

const RequiredArray = { 
    type: Array,
    required: true
}

const GuildSchema = new mongoose.Schema({
    guildId: RequiredString,
    guildName: RequiredString,
    guildIcon: NotRequiredString
});

module.exports = mongoose.model('Guild', GuildSchema);