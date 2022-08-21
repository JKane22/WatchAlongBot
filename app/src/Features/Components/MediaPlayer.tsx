import {
  Container,
  FormControlLabel,
  Switch,
} from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";

export default function MediaPlayer({
  roomStatus,
  guildInfo,
}: {
  roomStatus: boolean;
  guildInfo: any;
}) {
  const [autoplay, setAutoplay] = React.useState(false);
  return (
    <div className="element bg-cover bg-center bg-no-repeat">
      {roomStatus ? (
        <div>
          <div>
            <div className="gird gird-cols-1 grid-rows-1 gap-2 justify-center flex">
              <div className="col-span-1">
                <ReactPlayer
                  style={{
                    paddingTop: "15px",
                  }}
                  url="https://clips.twitch.tv/MoistRefinedGarageAsianGlow-OW8dm6ZEat1OLSl0"
                  controls
                  config={{
                    twitch: {
                      options: {
                        autoplay: autoplay,
                      },
                    },
                    youtube: {
                      playerVars: {
                        autoplay: autoplay,
                      },
                    },
                  }}
                  width="750px"
                  height="437px"
                />
                <div>
                  <Container
                    style={{
                      backgroundColor: "#2b3036",
                      color: "white",
                      float: "right",
                      minWidth: "150px",
                      maxWidth: "150px",
                      borderRadius: "5px",
                    }}
                    maxWidth="sm"
                  >
                    <FormControlLabel
                      style={{
                        color: "white",
                        fontWeight: "bold",
                      }}
                      control={
                        <Switch
                          checked={autoplay}
                          onChange={() => setAutoplay(!autoplay)}
                          name="AutoPlay"
                        />
                      }
                      label="AutoPlay"
                    />
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
