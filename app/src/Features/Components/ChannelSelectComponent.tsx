import { useNavigate } from "react-router-dom";

// Create data for the channel select component
import { createGuildData } from "../../API/auth";

// Material UI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
  const InviteBot = (guild: any) =>
    (window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1000186778101235743&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fdiscord%2Fadded&response_type=code&scope=identify%20bot%20applications.commands&guild_id=${guild.id}`);

  return (
    <div className="relative grid grid-cols-3 m-auto justify-items-center gap-4 pl-2 pr-2 max-w-screen-lg pt-12">
      {guilds.map((guild: any) => (
        <div key={guild.id}>
          <Card
            sx={{
              minWidth: 315,
              maxWidth: 315,
              maxHeight: 200,
              minHeight: 200,
            }}
            onClick={async () => {
              // Setting LocalStorage for Guild/User.
              if (localStorage.getItem("guildInfo") !== null) {
                localStorage.removeItem("guildInfo");
                localStorage.removeItem("userInfo");

                // Update the Guild and User Info in LocalStorage
                localStorage.setItem("guildInfo", JSON.stringify(guild));
                localStorage.setItem("userInfo", JSON.stringify(user));
              } else {
                localStorage.setItem("guildInfo", JSON.stringify(guild));
                localStorage.setItem("userInfo", JSON.stringify(user));
              }
              
              await createGuildData(guild);
              navigate(`/dashboard/${guild.id}`);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={{ height: "140px", width: "500px", objectFit: "cover" }}
                image={
                  guild.icon
                    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                    : "https://cdn.discordapp.com/embed/avatars/0.png"
                }
                alt="Guild Icon"
              />
              <CardContent style={{ backgroundColor: "#2b3036" }}>
                <Typography
                  gutterBottom
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                  variant="overline"
                  component="div"
                >
                  {guild.name.length > 30 ? guild.name.slice(0, 30) + "..." : guild.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
      {BotNotIncluded.map((guild: any) => (
        <div key={guild.id}>
          <Card
            sx={{ minWidth: 315, maxWidth: 315 }}
            onClick={async () => {
              // LocalStorage for Guild/User.
              if (localStorage.getItem("guildInfo") !== null) {
                localStorage.removeItem("guildInfo");
                localStorage.removeItem("userInfo");

                // Update the Guild and User Info in LocalStorage
                localStorage.setItem("guildInfo", JSON.stringify(guild));
                localStorage.setItem("userInfo", JSON.stringify(user));
              } else {
                localStorage.setItem("guildInfo", JSON.stringify(guild));
                localStorage.setItem("userInfo", JSON.stringify(user));
              }

              InviteBot(guild);
              await createGuildData(guild);
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                style={{ height: "140px", width: "500px", objectFit: "cover" }}
                image={
                  guild.icon
                    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
                    : "https://cdn.discordapp.com/embed/avatars/0.png"
                }
                alt="Guild Icon"
              />
              <CardContent style={{ backgroundColor: "#2b3036" }}>
                <Typography
                  gutterBottom
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                  variant="overline"
                  component="div"
                >
                  {guild.name.length > 30 ? guild.name.slice(0, 30) + "..." : guild.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}
