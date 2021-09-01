import { Link } from "react-router-dom";

const ArticlesList = ({articles}) => {
  return (
  <section className='Articles'>
      <ul className='Articles__list'>
          {articles.map(({title, article_id, author}) => {
              return (
                  <li key={article_id}>
                    <Link to={`/articles/${article_id}`}>
                    <h2>{title}</h2>
                    </Link>
                    <Link to={`/users/${author}/articles`}>
                    <p>{author}</p>
                    </Link>
                  </li>
              )
          })}
      </ul>


  </section>);
};

export default ArticlesList;
