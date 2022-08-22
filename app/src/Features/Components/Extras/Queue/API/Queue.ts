import axios from "axios";

export function CheckQueue(guildId: string) {
    return axios.get('http://localhost:3001/api/discord/check/queue', {
        withCredentials: true,
        params: {
            guildId: guildId
        }
    })
}
