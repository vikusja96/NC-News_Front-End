import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import Likes from "./Likes";

const Article = ({ user }) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoding] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoding(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="Article Articles">
      <div className="Article__box">
        <div className="Article__article">
          <h1>{article.title}</h1>
          <div className="Article__author">
          <Link to={`/users/${article.author}/articles`}>
            <p>{article.author}</p>
          </Link>
          </div>
          <div className="Article__img-box">
            <img
              src={`https://images.unsplash.com/photo-${
                article.topic === "football"
                  ? "1600679472829-3044539ce8ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  : ""
              }${
                article.topic === "cooking"
                  ? "1514986888952-8cd320577b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80"
                  : ""
              }${
                article.topic === "coding"
                  ? "1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                  : ""
              }`}
              alt={article.title}
            />
          </div>
          <p>{article.body}</p>
          <Likes article_id={article_id} article={article} />
          
        </div>
        <div className="Article__comments">
          <Comments article_id={article_id} user={user} />
        </div>
      </div>
    </section>
  );
};

export default Article;
