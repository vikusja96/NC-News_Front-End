import React, { useState } from "react";
import { postComment } from "../utils/api";

const AddComment = ({ setComments, article_id, user }) => {
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    postComment(article_id, user, newComment);
  };
  
  const handleChange = ({ target: { value } }) => {
    setNewComment(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currentComments) => {
      const newComents = [...currentComments];
      const addComment = { body: newComment };
      newComents.push(addComment);
      return newComents;
    });
    setNewComment("");
  };

  return (
    <form className="Add-comment" onSubmit={handleSubmit}>
      <input
        className="Add-comment__input"
        type="text"
        value={newComment}
        onChange={handleChange}
      ></input>
      <button className="Add-comment__button" onClick={addComment}>
        Add comment
      </button>
    </form>
  );
};

export default AddComment;
