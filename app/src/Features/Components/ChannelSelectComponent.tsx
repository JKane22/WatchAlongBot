// Card Component
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

// Create data for the channel select component
import { createGuildData } from "../../API/auth";
import GuildWarning from "../../Features/Components/CreateGuildWarning";

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
  return (
    <div className="relative grid grid-cols-3 m-auto justify-center gap-4 pl-2 pr-2 max-w-screen-lg pt-10">
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
                variant="warning"
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
                onClick={async () => {
                  console.log("Need to be added to server!")
                }}
              >
                Invite to Server!
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

// grid w-72 bg-grey mb-15 