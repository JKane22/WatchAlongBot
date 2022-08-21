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

// Updating the Room Status in the database
export function UpdateRoomStatus(guildId: string, status: boolean, hostName: any, hostId: any) {
    return axios.get('http://localhost:3001/api/discord/update/roomStatus', { 
        withCredentials: true,
        params: {
            guildId: guildId,
            status: status,
            hostName: hostName,
            hostId: hostId
        }
    })
}

// checking the room status in the database
export function CheckRoomStatus(guildId: string) {
    return axios.get('http://localhost:3001/api/discord/check/roomStatus', {
        withCredentials: true,
        params: {
            guildId: guildId
        }
    })
}

export function CheckQueue(guildId: string) {
    return axios.get('http://localhost:3001/api/discord/check/queue', {
        withCredentials: true,
        params: {
            guildId: guildId
        }
    })
}

// Dev Settings
export function DevAddVideo(guildId: string) {
    return axios.get('http://localhost:3001/api/discord/dev/addVideo', {
        withCredentials: true,
        params: {
            guildId: guildId
        }
    })
}