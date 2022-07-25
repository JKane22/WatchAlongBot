import React from "react";

import { getGuildData } from "../API/auth";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [guildInfo, setGuildInfo] = React.useState({ name: "", id: "" });

  React.useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    getGuildData(id)
      .then(({ data }) => {
        setGuildInfo({ name: data.guildName, id: id });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        navigate("/");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="element">
        <h1
          style={{
            paddingBottom: "100px",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          Dashboard
        </h1>
        <h1>
          🎉 Welcome {guildInfo.name ? guildInfo.name : null} to WatchAlong! 🎉
        </h1>
      </div>
    );
  }
}
