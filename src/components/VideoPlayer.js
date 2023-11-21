import React from "react";

function VideoPlayer({ embedUrl, title }) {
  return (
    <iframe
      title={title}
      width="919"
      height="525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
}

export default VideoPlayer;
