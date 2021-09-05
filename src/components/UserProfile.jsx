const UserProfile = ({setUser}) => {
    return (
        <div className="UserProfile__container">
            <button className="UserProfile__button" onClick={() => setUser(null)}>Log out</button> 
        </div>
    );
};

export default UserProfile;