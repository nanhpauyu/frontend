import type { PeopleList } from "../types";
import { useNavigate } from 'react-router-dom';

const MessageList = ({ peopleList }: PeopleList) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="px-5">
                <h2 className="px-6 text-pink-500 font-bold uppercase tracking-wider text-xs mb-4 pt-5">Messages</h2>
                <ul className="list bg-base-100 rounded-box shadow-md">
                    {
                        peopleList.filter((user) => user.messages?.length !== 0).map((user) => {

                            const userMessage = user.messages?.at(-1)?.text;

                            return (

                                <li className="list-row" key={user.id}
                                    onClick={() => {
                                        navigate(`/message/${user.id}`);
                                    }}>
                                    <div><img className="size-10 rounded-full" src={user.imageUrl} /></div>
                                    <div>
                                        <div>{user.name}</div>
                                        <div className="text-xs uppercase font-semibold opacity-60">
                                            {user.messages?.at(-1)?.sender === 'You' ?
                                            `You: ${userMessage?.substring(0, 20) + "..."}`
                                            :
                                            userMessage?.substring(0, 28) + "..."}
                                        </div>
                                    </div>
                                    {/* <Avatar
                                    name={user.name}
                                    isOnline={user.isOnline}
                                    imageUrl={user.imageUrl}
                                    size={10}
                                />
                                <div>
                                    <div>{user.name}</div>
                                    <div className="text-xs  opacity-60 overflow-hidden truncate ">{
                                        user.messages?.at(-1)?.sender === 'You' ?
                                            `You: ${lastMessage}`
                                            :
                                            lastMessage
                                    }

                                    </div>
                                </div> */}
                                    <span className="text-[12px] text-gray-500 truncate">{user.messages?.at(-1)?.timestamp}</span>
                                </li>

                            )
                        }
                        )
                    }
                </ul>
            </div>

        </>
    )
}
export default MessageList;