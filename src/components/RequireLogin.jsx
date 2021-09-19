import { Link } from "react-router-dom";

const RequireLogin = ({ user, children, setUser }) => {
  if (user) return children;
  return (
    <div className="Login__home-page">
      <h1>
        Northcoders <span>News</span>
      </h1>
      <div className="Login__pop-up">
        <h2>Please login to use this app</h2>
        <p>You can Log-in as grumpy19</p>
        <div className="Login__button-box">
        <Link to={'/articles'}>
          <button
            className="Login__button"
            onClick={() => setUser({ username: "grumpy19" })}>Log-in
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RequireLogin;
