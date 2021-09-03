import TopicsList from "./TopicsList";
import UserProfile from "./UserProfile";
import { useState } from "react";


const NavWeb = ({ articles, user, setUser}) => { 
    const [isOpen, setIsOpen] = useState(false); 
    return (
      <section className='Nav-web'>
          <TopicsList articles={articles} setIsOpen={setIsOpen}/>
          <UserProfile user={user} setUser={setUser} />
      </section>
    );
  };

export default NavWeb;