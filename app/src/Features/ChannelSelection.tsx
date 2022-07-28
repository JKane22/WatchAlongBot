import React from "react";

// API for Getting User Data
import { getUserInfo, getGuilds } from "../API/auth";

// React Dom Stuff
import { useNavigate } from "react-router-dom";

// Components / Wrappers
import ChannelSelectComponent from "./Components/ChannelSelectComponent";
import Navbar from "./Components/Navbar";

// eslint-disable-next-line no-empty-pattern
export default function ChannelSelection({}) {
  const [user, setUser] = React.useState(null);
  const [guilds, setGuilds] = React.useState(null);
  const [NotIncluded, setBotNotIncluded] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserInfo()
      .then(({ data }) => {
        setUser(data);
        return getGuilds();
      })
      .then(({ data }) => {
        setGuilds(data[1]);
        setBotNotIncluded(data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
        return;
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="element"
        style={{
          backgroundColor: "#212529",
          background: "cover",
          height: "100vh"
        }}
      >
        <Navbar user={user} />
        <h1 className="text-white font-bold text-center"> Select a Server</h1>
        <ChannelSelectComponent
          BotNotIncluded={NotIncluded}
          guilds={guilds}
          user={user}
        />
      </div>
    );
  }
}
