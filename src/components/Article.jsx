import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import Likes from "./Likes";

const Article = ({user}) => {
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
    <section className='Article Articles'>
      <div className="Article__article">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <Likes article_id={article_id} article={article}/>
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
