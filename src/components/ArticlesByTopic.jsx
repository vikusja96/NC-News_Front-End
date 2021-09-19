import { Link, useParams } from "react-router-dom";

const ArticlesByTopic = ({ articles }) => {
  const { topic } = useParams();

  const specTopicArticles = articles.filter((article) => {
    return article.topic === topic;
  });

  return (
    <section className="Articles ">
      <h1 className="Articles__topic">{topic}</h1>
      <ul className="Articles__list ArticlesList__list">
        {specTopicArticles.map(
          ({ title, author, article_id, votes, comment_count }) => {
            return (
              <li key={article_id}>
                <div className="ArticlesList__card">
                  <div className="ArticlesList__img">
                    <img
                      src={`https://images.unsplash.com/photo-${
                        topic === "football"
                          ? "1600679472829-3044539ce8ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                          : ""
                      }${
                        topic === "cooking"
                          ? "1514986888952-8cd320577b68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80"
                          : ""
                      }${
                        topic === "coding"
                          ? "1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
                          : ""
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

export default ArticlesByTopic;
