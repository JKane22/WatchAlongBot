import { Button } from "flowbite-react";
import React from "react";
import ReactPlayer from "react-player";

// Frostbite

// API
import { CheckQueue } from "../../API/auth";

export default function MediaPlayer({
  roomStatus,
  guildInfo,
}: {
  roomStatus: boolean;
  guildInfo: any;
}) {
  // Settings and Variables for the Media Player
  const [AutoPlay, setAutoPlay] = React.useState(0);

  return (
    <div className="element bg-cover bg-center bg-no-repeat">
      {roomStatus ? (
        <div>
          <ReactPlayer
            url={`https://www.twitch.tv/koil`}
            config={{
              youtube: {
                playerVars: {
                  autoplay: { AutoPlay },
                  start: 0,
                  origin: "https://www.youtube.com",
                  controls: 1,
                },
              },
              twitch: {
                options: {
                  autoplay: { AutoPlay },
                  start: 0,
                  origin: "https://www.twitch.tv",
                  controls: 1,
                },
              },
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
