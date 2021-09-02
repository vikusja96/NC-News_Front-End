import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../utils/api";
import AddComment from "./AddComment";
import Expandable from "./Expandable";

const Comments = ({ article_id, user }) => {
  const [comments, setComments] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getComments(article_id).then((commentsfromApi) => {
      setComments(commentsfromApi);
    });
  }, []);

  const handelClick = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <section className="Comments">
      <h2 className="Comments__header">comments</h2>
      <AddComment
        setIsOpen={setIsOpen}
        setComments={setComments}
        article_id={article_id}
        user={user}
      />
      <Expandable isOpen={isOpen} setIsOpen={setIsOpen}>
        <ul className="Comments__list">
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
        </ul>
        <button className="Comments__scroll-up" onClick={handelClick}>
          ^
        </button>
      </Expandable>
    </section>
  );
};

export default Comments;
