const mongoose = require('mongoose');

const RequiredString = {
    type: String,
    required: true
}

const NotRequiredString = {
    type: String,
    required: false
}

const GuildSchema = new mongoose.Schema({
    guildId: RequiredString,
    guildName: RequiredString,
    guildIcon: NotRequiredString,
    guildWatchAlong: {
        "Watching": {
            type: Boolean,
            default: false
        },
        "Queue": [],
        "HostName": {
            type: String,
            default: null 
        },
        "HostId": {
            type: String,
            default: null
        }
    }
});

module.exports = mongoose.model('Guild', GuildSchema);