import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='Home'>
      <Link to="/articles">
        <h1>Northcoders News</h1>
      </Link>
    </div>
  );
};

export default Home;
