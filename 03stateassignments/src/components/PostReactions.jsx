import React, { useState } from "react";

const PostReactions = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);

  function handleLike() {
    setLikes((prev) => prev + 1);
  }

  function handleComment() {
    setComments((prev) => prev + 1);
  }
  return (
    <>
      <h2>Assignment 11 - Post Reactions</h2>
      <p>⭐ This is my first react post!</p>

      <p>
        Likes: {likes} | Comments: {comments}
      </p>

      <button onClick={handleLike}>Add Like</button>
      <button onClick={handleComment}>Add Comment</button>
    </>
  );
};

export default PostReactions;
