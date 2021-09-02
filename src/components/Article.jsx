import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";

const Article = ({user}) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  return (
    <section className='Article'>
      <div className="Article__article">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <p>Like: {article.votes}</p>
        <p>comments: {article.comment_count}</p>
        <Link to={`/users/${article.author}/articles`}>
          <p>{article.author}</p>
        </Link>
      </div>
      <div className="Article__comments">
        <Comments article_id={article_id} user={user} />
      </div>
    </section>
  );
};

export default Article;
