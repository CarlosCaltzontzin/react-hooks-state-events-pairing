import React, { useState } from "react";

function VideoDetails({ title, views, createdAt, initialUpvotes, initialDownvotes }) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>Views: {views} | Uploaded on: {createdAt}</p>
      <button onClick={handleUpvote}>
        {upvotes}{" "}
        <span role="img" aria-label="Thumbs Up">
          👍
        </span>
      </button>
      <button onClick={handleDownvote}>
        {downvotes}{" "}
        <span role="img" aria-label="Thumbs Down">
          👎
        </span>
      </button>
    </div>
  );
}

export default VideoDetails;
