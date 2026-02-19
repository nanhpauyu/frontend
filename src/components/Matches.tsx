import Avatar from "./Avatar";
import type { PeopleList,  } from "../types";
import { useNavigate } from 'react-router-dom';


const Matches = ({ peopleList }: PeopleList) => {
    const navigate = useNavigate();
    return (
        <><div className="px-5">
            <div className="px-6 flex justify-between items-center mb-4">
                <h2 className="text-pink-500 font-bold uppercase tracking-wider text-xs">New Matches</h2>
                <span className="text-gray-500 text-xs">24 Likes</span>
            </div>
            <div className="overflow-x-auto">
                <ul className="steps">
                    {peopleList.map((user) => (
                        <li className="px-1" key={user.id}
                            onClick={() => {
                                navigate(`/messages/${user.id}`);
                            }}>
                            <Avatar
                                name={user.name}
                                isOnline={user.isOnline}
                                imageUrl={user.imageUrl}
                                size={20} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}
export default Matches;