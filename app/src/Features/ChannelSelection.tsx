import React from "react";

// API for Getting User Data
import { getUserInfo, getGuilds } from "../API/auth";

// React Dom Stuff
import { useNavigate } from "react-router-dom";

// Components / Wrappers
import ChannelSelectComponent from "./Components/ChannelSelectComponent";
import Navbar from "./Components/Navbar";
import LoadingScreen from "./Components/Extras/loading";

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
    return (
      <div
        className="element bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "#212529",
          background: "cover",
          height: "100vh",
        }}
      >
        <LoadingScreen />
      </div>
    );
  } else {
    return (
      <div
        className="element bg-cover bg-center bg-repeat"
        style={{
          backgroundColor: "#212529",
          background: "cover",
          backgroundRepeat: "repeat",
          height: "100vh",
        }}
      >
        <Navbar user={user} />
        <div className="text-white text-center pt-8 flex-shrink">
          <h1 className="font-bold">Select a Server</h1>
          <h5 className="font-extralight">
            Some server's may need a set-up before the WatchAlong Party
          </h5>
        </div>
        <ChannelSelectComponent
          BotNotIncluded={NotIncluded}
          guilds={guilds}
          user={user}
        />
      </div>
    );
  }
}
