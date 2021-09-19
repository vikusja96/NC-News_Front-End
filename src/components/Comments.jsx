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
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="Comments">
      <AddComment
        setIsOpen={setIsOpen}
        setComments={setComments}
        article_id={article_id}
        user={user}
      />
      <div className="Comments__display">
      <h2 className="Comments__header">Comments</h2>
      <Expandable isOpen={isOpen} setIsOpen={setIsOpen}>
       <div className="Comments__all">
        <ul className="Comments__list">
          {comments.map(({ comment_id, author, votes, body, created_at }) => {
            return (
              <li className="Comments__list-item" key={comment_id}>
                <p className="Comments__list-author">{author}</p>
                <p className="Comments__list-body">{body}</p>
                <div className="Comments__list-details">
                <p className="Comments__list-likes">👍 &nbsp;{votes}</p>
                <p className="Comments__list-date">{created_at}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="Comments__scroll-up" onClick={handelClick}>
        ⬆
        </button>
        </div>
      </Expandable>
      </div>
    </section>
  );
};

export default Comments;
