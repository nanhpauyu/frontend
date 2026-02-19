import Matches from "../components/Matches";
import MessageList from "../components/MessageList";
import SearchComp from "../components/SearchComp";
import type { PeopleList } from "../types";

const MessagesScreen = ({peopleList}:PeopleList) => {

  return (
    <>
      <div className="pt-10">
        <SearchComp />
        <Matches peopleList={peopleList}/>
        <MessageList peopleList={peopleList || []}/>
      </div>
    </>
  );
}
export default MessagesScreen;