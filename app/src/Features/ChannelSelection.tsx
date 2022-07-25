import React from "react";

// API for Getting User Data
import { getUserInfo, getGuilds } from "../API/auth";

// React Dom Stuff
import { useNavigate } from "react-router-dom";

// Components / Wrappers
import ChannelSelectComponent from "./Components/ChannelSelectComponent";

// eslint-disable-next-line no-empty-pattern
export default function ChannelSelection({}) {
  const [user, setUser] = React.useState(null);
  const [guilds, setGuilds] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    getUserInfo()
      .then(({ data }) => {
        setUser(data);
        return getGuilds();
      })
      .then(({ data }) => {
        setGuilds(data);
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
      <div className="element">
        <h1 style={{ paddingBottom: "100px", fontWeight: "bold" }}>
          Channel Selection
        </h1>
        <h1>🎉 Choose a server to start a WatchAlong Party! 🎉</h1>
        <ChannelSelectComponent guilds={guilds} user={user} />
      </div>
    );
  }
}
