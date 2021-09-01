import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import Expandable from "./Expandable";

const Comments = ({ article_id}) => {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    getComments(article_id).then((commentsfromApi) => {
      setComments(commentsfromApi);
    });
  });

  return (
    <section>
      <h2 className="Comments__header">comments</h2>
      <Expandable isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="Comments__list"></ul>
        {comments.map(({ comment_id, author, votes, body, created_at }) => {
          return (
            <li key={comment_id}>
              <p>{author}</p>
              <p>{body}</p>
              <p>{votes}</p>
              <p>{created_at}</p>
            </li>
          );
        })}
      </Expandable>
    </section>
  );
};

export default Comments;
