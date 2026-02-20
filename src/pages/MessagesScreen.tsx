import Matches from "../components/Matches";
import MessageList from "../components/MessageList";
import Navigation from "../components/Navigation";
import SearchComp from "../components/SearchComp";
import type { People, PeopleList } from "../types";
import { useOutletContext } from 'react-router-dom';

const MessagesScreen = () => {
const { peopleList,matches, profile  } = useOutletContext<{ peopleList: People[], matches: People[], profile: People }>();
  return (
    <>
      <div className="pt-5">
        <SearchComp />
        <Matches peopleList={matches} />
        <MessageList peopleList={matches || []} />
      </div>
      
    </>
  );
}
export default MessagesScreen;