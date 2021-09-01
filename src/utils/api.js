export const getArticles = () => {
  return fetch("https://vk-nc-news-server.herokuapp.com/api/articles")
    .then((res) => res.json())
    .then((data) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return fetch("https://vk-nc-news-server.herokuapp.com/api/topics")
  .then ((res) => res.json())
  .then((data) => {
    return data.topics
  })
}

export const getUsers = () => {
  return fetch("https://vk-nc-news-server.herokuapp.com/api/users")
  .then((res) => res.json())
  .then((data) => {
    return data.users
  })
}

export const getArticleById = (article_id) => {
  return fetch(`https://vk-nc-news-server.herokuapp.com/api/articles/${article_id}`)
  .then((res) => res.json())
  .then((data) => {
      return data.article[0]
  })
}

export const getComments = (article_id) => {
  return fetch(`https://vk-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`)
  .then((res) => res.json())
  .then((data) => {
    return data.comments
  })
}