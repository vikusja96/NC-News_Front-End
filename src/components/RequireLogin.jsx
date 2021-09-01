const RequireLogin = ({user, children, setUser}) => {
    if (user) return children;
    return (
        <div>
            <h1>Please login to use this app</h1>
            <p>Log-in as a Guest:</p>
            <button onClick={() => setUser({username: 'Guest'})}>
                Log-in
            </button>
        </div>
    );
};

export default RequireLogin;