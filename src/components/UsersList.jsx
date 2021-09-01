import { Link } from "react-router-dom";

const UsersList = ({users}) => {

  return (
    <section>
      <ul className="Users__list">
        {users.map(({ username, avatar_url, name }) => {
          return (
            <li key={username}>
              <div className="User__profile">
                <Link to={`/users/${username}/articles`}>
                <img src={avatar_url} alt={`${name}'s avatar`} />
                <h2>{name}</h2>
                <div className="User__username">
                  <p>Display name</p>
                  <h4>{username}</h4>
                </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default UsersList;
