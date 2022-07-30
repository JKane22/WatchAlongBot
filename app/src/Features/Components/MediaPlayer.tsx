import React from "react";
import ReactPlayer from "react-player";

// API
import { CheckQueue } from "../../API/auth";

export default function MediaPlayer({
  roomStatus,
  guildInfo,
}: {
  roomStatus: boolean;
  guildInfo: any;
}) {
  return (
    <h1> Media Player with buttons </h1>
  );
}
