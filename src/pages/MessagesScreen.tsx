import Matches from "../components/Matches";
import MessageList from "../components/MessageList";
import SearchComp from "../components/SearchComp";
import type { People,  } from "../types";
import { useOutletContext } from 'react-router-dom';

const MessagesScreen = () => {
const { matches } = useOutletContext<{ peopleList: People[], matches: People[], profile: People }>();
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