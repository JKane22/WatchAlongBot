import * as React from "react";

// Changelog
import ChangelogScreen from "./Extras/ChangeLog";

// MediaPlayer
import MediaPlayer from "./MediaPlayer";

// eslint-disable-next-line no-empty-pattern
export default function DashboardComponent({guildInfo, roomStatus}: {guildInfo: any, roomStatus: boolean}) {
  return (
    <div>
      <ChangelogScreen />
      <div> 
        <MediaPlayer guildInfo={guildInfo} roomStatus={roomStatus} />
      </div>
    </div>
  );
}
