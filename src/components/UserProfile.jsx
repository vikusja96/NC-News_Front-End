const UserProfile = ({setUser}) => {
    return (
        <div>
            <button onClick={() => setUser(null)}>Log out</button> 
        </div>
    );
};

export default UserProfile;