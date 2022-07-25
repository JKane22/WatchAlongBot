import axios from 'axios';

export function getUserInfo() {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true
    });
}

export function getGuilds() {
    return axios.get('http://localhost:3001/api/discord/guilds', {
        withCredentials: true
    })
}

// Finding the guild data from the database
export function createGuildData(guild: any) {
    return axios.get('http://localhost:3001/api/discord/guild/create', {
        withCredentials: true,
        params: {
            guild: guild
        }
    })
}

export function getGuildData(guildId: string) {
    return axios.get('http://localhost:3001/api/discord/guild/' + guildId, {
        withCredentials: true
    })
}