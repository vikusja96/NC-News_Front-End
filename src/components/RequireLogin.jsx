const RequireLogin = ({user, children, setUser}) => {
    if (user) return children;
    return (
        <div className='Login__home-page'>
            <h1>Northcoders News</h1>
            <h2>Please login to use this app</h2>
            <p>Log-in as grumpy19:</p>
            <button className='Login__button'onClick={() => setUser({ username: "grumpy19" })}>
                Log-in
            </button>
        </div>
    );
};

export default RequireLogin;