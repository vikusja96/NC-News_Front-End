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
  }, [article_id]);

  const handelClickUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const fixData = (created_at) => {
    const fixedData = new Date(created_at);
    return fixedData.toLocaleDateString();
  }

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
                <p className="Comments__list-date">{fixData(created_at)}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="Comments__scroll-up" onClick={handelClickUp}>
        ⬆
        </button>
        </div>
      </Expandable>
      </div>
    </section>
  );
};

export default Comments;
