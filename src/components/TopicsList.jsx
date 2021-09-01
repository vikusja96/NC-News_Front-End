import React, { useState, useEffect } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const TopicsList = ({setIsOpen}) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  const handelClick = () => {
    setIsOpen(false);
  }

  return (
    <section className="Topics">
      <ul className="Topics__list">
        {topics.map(({ slug, description }) => {
          return (
            <li key={description}>
              <Link to={`/${slug}/articles`} onClick={handelClick} >{slug}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TopicsList;
