import { useNavigate } from "react-router-dom";

// Card Component
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// Create data for the channel select component
import { createGuildData } from "../../API/auth";

export default function ChannelSelectComponent({
  guilds,
  user,
}: {
  guilds: any;
  user: any;
}) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      className="element"
    >
      {guilds.map((guild: any) => (
        <div key={guild.id}>
          <Card
            style={{
              width: "18rem",
              minWidth: "50px",
              height: "300px",
              backgroundColor: "#5c5c5c",
              marginLeft: "15px",
              marginBottom: "15px",
            }}
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
              <Card.Title style={{ fontWeight: "bold", color: "white" }}>
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
    </div>
  );
}
