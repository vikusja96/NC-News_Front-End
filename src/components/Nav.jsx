import Expandable from "./Expandable";
import TopicsList from "./TopicsList";
import UserProfile from "./UserProfile";
import { useState } from "react";

const Nav = ({ articles, user, setUser}) => { 
  const [isOpen, setIsOpen] = useState(false); 
  return (
    <section>
      <Expandable isOpen={isOpen} setIsOpen={setIsOpen}>
        <TopicsList articles={articles} setIsOpen={setIsOpen}/>
        <UserProfile user={user} setUser={setUser} />
      </Expandable>
    </section>
  );
};

export default Nav;
