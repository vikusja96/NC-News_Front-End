import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getArticles, getUsers } from "./utils/api";
import RequireLogin from "./components/RequireLogin";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticlesByUser from "./components/ArticlesByUser";
import UsersList from "./components/UsersList";
import Home from "./components/Home";


function App() {
  const [user, setUser] = useState({ username: "Guest" });
  const [articles, setArticles] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <BrowserRouter>
      <Home/>
      <RequireLogin user={user} setUser={setUser}>
        <div className="App">
          <Nav articles={articles} user={user} setUser={setUser}/>

          <Switch>
            <Route exact path="/">
              <Home articles={articles} />
            </Route>

            <Route exact path="/articles">
              <ArticlesList articles={articles} />
            </Route>

            <Route exact path="/articles/:article_id">
              <Article/>
            </Route>

            <Route exact path="/:topic/articles">
              <ArticlesByTopic articles={articles} />
            </Route>

            <Route exact path="/users">
              <UsersList users={users}/>
            </Route>

            <Route exact path="/users/:user/articles">
              <ArticlesByUser users={users} articles={articles} />
            </Route>
          </Switch>
        </div>
      </RequireLogin>
    </BrowserRouter>
  );
}

export default App;
