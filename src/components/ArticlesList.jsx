import { Link } from "react-router-dom";
import { useState } from "react";

const ArticlesList = ({articles}) => {
  const [selected, setSelected] = useState('')

  const handleClick = ({ target: { value }}) => {
    console.log(value)
    setSelected(value)
  }
  
  return (
  <section className='Articles'>
    <label>
      <select>
        <option>select</option>
        <option value='sort_by=votes' onClick={handleClick}>votes</option>
        <option value='sort_by=date'>new firs</option>
        <option value='order=desc'>max comments</option>
      </select>
      </label>
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