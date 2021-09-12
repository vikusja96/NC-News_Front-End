import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { sortArticles } from "../utils/api";

const ArticlesList = ({ articles, setArticles }) => {
  const [selected, setSelected] = useState("");
  const [isLoading, setIsLoding] = useState(true);

  const handleClick = ({ target: { value } }) => {
    setIsLoding(true);
    setSelected(value);
    setIsLoding(false);
  };

  useEffect(() => {
    sortArticles(selected).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoding(false);
    });
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="Articles">
      <label>
        <select className="ArticlesList__sort-by"onChange={handleClick}>
          <option value="">Sort by ...</option>
          <option value="sort_by=votes" onClick={handleClick}>
            Likes
          </option>
          <option value="sort_by=comment_count">Comments</option>
        </select>
      </label>
      <ul className="ArticlesList__list">
        {articles.map(
          ({ title, article_id, author, votes, comment_count, topic }) => {
            return (
              <li key={article_id}>
                <div className="ArticlesList__card">
                  <div className='ArticlesList__img'>
                  <img
                    src={`https://images.unsplash.com/photo-${
                      topic === "football"
                        ? "1600679472829-3044539ce8ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        : ""
                    }${topic === "cooking" ? "1514986888952-8cd320577b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80" : ""}${
                      topic === "coding" ? "1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" : ""
                    }`}
                    alt={title}
                  />
                  </div>
                  <div className="ArticlesList__info">
                    <Link to={`/articles/${article_id}`}>
                      <h2>{title}</h2>
                    </Link>
                    <div className="ArticlesList__further-info">
                      <Link to={`/users/${author}/articles`}>
                        <p>{author}</p>
                      </Link>
                      <p>👍 &nbsp; {votes}</p>
                      <p>💬 &nbsp; {comment_count}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default ArticlesList;
