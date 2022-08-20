import { Button } from "flowbite-react";
import React from "react";
import ReactPlayer from "react-player";

export default function MediaPlayer({
  roomStatus,
  guildInfo,
}: {
  roomStatus: boolean;
  guildInfo: any;
}) {
  return (
    <div className="element bg-cover bg-center bg-no-repeat">
      {roomStatus ? (
        <div>
          <div>
            <div className="gird gird-cols-2 grid-rows-1 gap-2 justify-center flex">
              <div className="col-span-1">
                <ReactPlayer
                  url={"https://www.twitch.tv/xqc"}
                  controls={true}
                  volume={0.25}
                  style={{ width: "150px" }}
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Button
                  style={{ borderRadius: "10px" }}
                >
                  Check Queue
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
