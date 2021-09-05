const Expandable = ({ isOpen, setIsOpen, children }) => {
  const toggleOpen = () => {
    setIsOpen((currIsOpen) => !currIsOpen);
  };

  return (
    <div>
      <button className="Expand__button" onClick={toggleOpen}>
        {isOpen ? '︽' : '︾' }
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export default Expandable;
