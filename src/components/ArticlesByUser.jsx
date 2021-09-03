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
    
    specUser = users.filter(( eachUser ) => {
      return eachUser.username === user;
    });
  }

  return (
    <section className="Articles_by_User Articles">
      <div>
        {users.length !== 0 && (
          <div>
            <div className='Articles_by_User__user'>
            <img
              src={specUser[0].avatar_url}
              alt={`${specUser[0].name}'s avatar`}
            />
            <h1 className="User">{user}</h1>
            <h2>{specUser[0].name}</h2>
            </div>
            <ul className="Articles_by_User__list Articles__list">
              {specUserArticles.map(({ title, article_id }) => {
                return (
                  <li key={article_id}>
                    <Link to={`/articles/${article_id}`}>
                      <h2>{title}</h2>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesByUser;
