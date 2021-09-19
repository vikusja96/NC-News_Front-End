import React, { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ setIsOpen, setComments, article_id, user }) => {
  const [newComment, setNewComment] = useState("");

  const handleChange = ({ target: { value } }) => {
    setNewComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const commentToPost = {
      username: user.username,
      body: newComment,
    };
    postComment(article_id, commentToPost).then(({ insertComment }) => {
      setComments((currentComments) => {
        return [...currentComments, insertComment[0]];
      });
      setNewComment("");
      setIsOpen(true);
      window.scrollTo({
        top: document.body.clientHeight,
        behavior: "smooth",
      });
    });
  };

  return (
    <form className="Add-comment" onSubmit={handleSubmit}>
      <textarea
        className="Add-comment__input"
        type="text"
        value={newComment}
        onChange={handleChange}
        placeholder="Write a comment"
      ></textarea>
        <button className="Add-comment__button">Add comment</button>
    </form>
  );
};

export default AddComment;
