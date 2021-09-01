const Expandable = ({isOpen, setIsOpen, children}) => {

    const toggleOpen = () => {
        setIsOpen((currIsOpen) => !currIsOpen)
    }
    return (
        <div>
            <button onClick={toggleOpen}>{isOpen ? '^' : 'v'}</button>
            {isOpen ? children : null}
        </div>
    );
};

export default Expandable;