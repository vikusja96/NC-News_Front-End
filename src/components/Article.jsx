import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <section>
      <div className="Article__article">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <Link to={`/users/${article.author}/articles`}>
          <p>{article.author}</p>
        </Link>
      </div>
      <div className="Article__comments">
        <Comments article_id={article_id} />
      </div>
    </section>
  );
};

export default Article;
