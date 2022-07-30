// Card Component
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

// Create data for the channel select component
import { createGuildData } from "../../API/auth";

export default function ChannelSelectComponent({
  guilds,
  user,
  BotNotIncluded,
}: {
  guilds: any;
  user: any;
  BotNotIncluded: any;
}) {
  const navigate = useNavigate();
  const InviteBot = (guild: any, user: any) => (window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1000186778101235743&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fdiscord%2Fadded&response_type=code&scope=identify%20bot%20applications.commands&guild_id=${guild.id}`);
  return (
    <div className="relative grid grid-cols-3 m-auto justify-center gap-4 pl-2 pr-2 max-w-screen-lg pt-12">
      {guilds.map((guild: any) => (
        <div key={guild.id}>
          <Card
            style={{
              height: "300px",
              backgroundColor: "#5c5c5c",
            }}
            className="justify-center justify-self-center text-white text-center text-lg"
          >
            <Card.Img
              src={
                guild.icon
                  ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                  : `https://i.imgur.com/bNdKwD5.png`
              }
              alt="Guild Icon"
              style={{ filter: "blur(5px)", overflow: "clip" }}
            />
            <Card.Img
              src={
                guild.icon
                  ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                  : `https://i.imgur.com/bNdKwD5.png`
              }
              style={{
                position: "absolute",
                top: "20%",
                left: "37%",
                overflow: "clip",
                borderRadius: "50px",
                width: "80px",
                height: "80px",
              }}
            />
            <Card.Body>
              <Card.Title className="text-white font-bold truncate">
                {guild.name}
              </Card.Title>
              <Button
                variant="secondary"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={async () => {
                  // Setting LocalStorage for Guild/User
                  if (localStorage.getItem("guildInfo") !== null) {
                    localStorage.removeItem("guildInfo");
                    localStorage.removeItem("userInfo");

                    // Update the Guild and User Info in LocalStorage
                    localStorage.setItem("guildInfo", JSON.stringify(guild));
                    localStorage.setItem("userInfo", JSON.stringify(user));
                  } else {
                    localStorage.setItem("guildInfo", JSON.stringify(guild));
                    localStorage.setItem("userInfo", JSON.stringify(user));
                  };

                  await createGuildData(guild);
                  navigate(`/dashboard/${guild.id}`);
                }}
              >
                Configure Server
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      {BotNotIncluded.map((guild: any) => (
        <div key={guild.id}>
          <Card
            style={{
              height: "300px",
              backgroundColor: "#5c5c5c",
            }}
            className="justify-center justify-self-center text-white text-center text-lg"
          >
            <Card.Img
              src={
                guild.icon
                  ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                  : `https://i.imgur.com/bNdKwD5.png`
              }
              alt="Guild Icon"
              style={{ filter: "blur(5px)", overflow: "clip" }}
            />
            <Card.Img
              src={
                guild.icon
                  ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                  : `https://i.imgur.com/bNdKwD5.png`
              }
              style={{
                position: "absolute",
                top: "20%",
                left: "37%",
                overflow: "clip",
                borderRadius: "50px",
                width: "80px",
                height: "80px",
              }}
            />
            <Card.Body>
              <Card.Title className="text-white font-bold truncate">
                {guild.name}
              </Card.Title>
              <Button
                variant="secondary"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={async () => {
                  InviteBot(guild, user)
                }}
              >
                Configure Server
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}