import React from "react";
import ReactLoading from "react-loading";

export default function LoadingScreen() {
  return <div className="flex justify-center self-center">
    <ReactLoading
        type="spinningBubbles"
        color="#FFFFFF"
        height={100}
        width={50}
      />
  </div>;
}
