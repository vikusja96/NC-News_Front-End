const UserProfile = ({setUser}) => {
    return (
        <div>
            <p>Logged as a Guest</p>
            <button onClick={() => setUser(null)}>Log out</button> 
        </div>
    );
};

export default UserProfile;