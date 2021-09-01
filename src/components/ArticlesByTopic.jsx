import { Link, useParams } from "react-router-dom";

const ArticlesByTopic = ({articles}) => {
    const {topic} = useParams();

    const specTopicArticles = articles.filter((article) => {
      return article.topic === topic;
    });
    
    return (
        <section className="Articles_by_Topic">
            <h1 className="topic">{topic}</h1>
            <ul className='Articles_by_Topic__list'>
                {specTopicArticles.map(({title, author, article_id}) => {
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
        </section>
    );
};

export default ArticlesByTopic;