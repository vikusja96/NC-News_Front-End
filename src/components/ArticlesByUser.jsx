import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ArticlesByUser = ({ users, articles }) => {
  const { user } = useParams();

  let specUserArticles;
  let specUser;

  if (users.length !== 0 && articles.length !== 0) {
    specUserArticles = articles.filter((article) => {
      return article.author === user;
    });

    specUser = users.filter((eachUser) => {
      return eachUser.username === user;
    });
  }

  return (
    <section className="Articles_by_User Articles">
      <div>
        {users.length !== 0 && (
          <div>
            <div className="Articles_by_User__user">
              <div className="Articles_by_User__user-img">
              <img
                src={specUser[0].avatar_url}
                alt={`${specUser[0].name}'s avatar`}
              />
              </div>
              <div className="Articles_by_User_user-info">
                <h1 className="User">{user}</h1>
                <h2>{specUser[0].name}</h2>
              </div>
            </div>
            <ul className="ArticlesList__list">
              {specUserArticles.map(
                ({ title, article_id, votes, comment_count, topic }) => {
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
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesByUser;
