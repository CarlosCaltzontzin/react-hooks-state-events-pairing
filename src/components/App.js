import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoDetails from "./VideoDetails";
import CommentsList from "./CommentsList";
import video from "../data/video.js";

function App() {
  const [showComments, setShowComments] = useState(true);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="App">
      <VideoPlayer embedUrl={video.embedUrl} title={video.title} />
      <VideoDetails
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        initialUpvotes={video.upvotes}
        initialDownvotes={video.downvotes}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && <CommentsList comments={video.comments} />}
    </div>
  );
}

export default App;