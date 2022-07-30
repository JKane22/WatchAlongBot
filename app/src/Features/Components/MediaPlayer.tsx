import React from "react";
import ReactPlayer from "react-player";

// Icons
import { IoIosSkipForward } from "react-icons/io";

// API
import { UpdateRoomStatus, CheckQueue } from "../../API/auth";

export default function MediaPlayer({
  roomStatus,
  guildInfo,
}: {
  roomStatus: boolean;
  guildInfo: any;
}) {
  const [playing, setPlaying] = React.useState(false);
  const [volume, setVolume] = React.useState(0.25) as any;

  // Videos to Play
  const [currentVideo, setCurrentVideo] = React.useState({
    url: "",
    title: "",
    authorName: "",
  });

  return (
    <h1> Media Player with buttons </h1>
  );
}
