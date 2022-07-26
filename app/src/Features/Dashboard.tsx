import React from "react";

import { getGuildData } from "../API/auth";

import { useNavigate } from "react-router-dom";

// Components
import DashboardNavbar from "./Components/Extras/Navbars/DashboardNavbar";
import LoadingScreen from "../Features/Components/Extras/loading";

// API
import { CheckRoomStatus } from "../API/auth";

// Dashboard Component
import DashboardComponent from "../Features/Components/DashboardComponent";

export default function Dashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [guildInfo, setGuildInfo] = React.useState({ name: "", id: "" });
  const [user, setUser] = React.useState({
    user: {
      discordUsername: "",
      discordId: "",
      discordDiscriminator: "",
      discordAvatar: "",
    },
  });

  // Checking the room status
  const [roomStatus, setRoomStatus] = React.useState(false);

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
    CheckRoomStatus(id).then((res) => {
      if (res.status.valueOf() === 200) {
        setRoomStatus(true);
      } else {
        setRoomStatus(false);
      }
    });

    // Get the User info from the local storage
    const GrabUserInfo = localStorage.getItem("userInfo") || "";
    const FinalUserInfo = JSON.parse(GrabUserInfo);

    setUser(FinalUserInfo);
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
        className="element bg-cover bg-center bg-no-repeat"
        style={{
          backgroundColor: "#212529",
          background: "cover",
          height: "100vh",
        }}
      >
        <DashboardNavbar user={user} />
        <div>
          <DashboardComponent guildInfo={guildInfo} roomStatus={roomStatus} />
        </div>
      </div>
    );
  }
}

// UpdateRoomStatus(guildInfo.id, true, user.user.discordUsername, user.user.discordId);
