import React from "react";

function CommentsList({ comments }) {
  const totalComments = comments.length;

  return (
    <div>
      <h3>{totalComments} {totalComments === 1 ? "Comment" : "Comments"}</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.user}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentsList;
