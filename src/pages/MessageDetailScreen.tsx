import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { type Message, type PeopleList, type People } from '../types';
import { matchPeopleList, } from '../data';
import Avatar from '../components/Avatar';



const MessageDetailScreen = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [messages, setMessages] = useState<Message[]>([])
    const [matchPeopleLista, setMatchPeopleLista] = useState<People[]>(matchPeopleList)
    const [currentUser, setCurrentUser] = useState<People>({} as People)
    const [startUpLoading, setStartUpLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const user = matchPeopleLista.find((u) => u.id === id);
        if (user) {
            setCurrentUser(user)
        }
        setMessages(user?.messages ?? []);
        setStartUpLoading(true)
    }, [id, matchPeopleLista]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [startUpLoading]);


    const loadMoreMessages = () => {
        const olderData: Message[] = [
            {
                id: "old-1",
                sender: currentUser.name,
                text: "ဒါက အရင်က ပို့ထားတဲ့ message ပါ။",
                timestamp: "2026-02-16T10:00:00Z",
                isRead: true,
            },
    
        ];

        setMessages((prev) => [...olderData, ...prev]);
    };




    return (
        <div className="flex flex-col h-screen bg-base-100 pt-6">
            <div className="navbar bg-base-100 border-b border-base-200 sticky top-0 z-10">
                <div className="flex-none">
                    <button className="btn btn-ghost btn-circle" onClick={() => window.history.back()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center gap-3">
                    <Avatar
                        name={currentUser.name}
                        isOnline={currentUser.isOnline}
                        imageUrl={currentUser.imageUrl}
                        size={8}
                    />
                    <div>
                        <h2 className="font-bold text-sm leading-none">
                            {currentUser.name}
                        </h2>
                        <p className="text-[10px] opacity-50">
                            {currentUser.isOnline ? "Online" : "Offline"}
                        </p>
                    </div>
                </div>
            </div>

            {/* --- Message List Area --- */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                <div className="flex justify-center py-2">
                    <button
                        className="btn btn-ghost btn-xs text-primary"
                        onClick={loadMoreMessages}
                    >
                        Older messages ကိုကြည့်ရန်
                    </button>
                </div>
                <div className="text-center opacity-40 text-xs my-4 uppercase tracking-widest font-semibold">Today</div>

                {
                    messages.map((m) => {
                        return (m.sender === 'You' ?
                            <div className="chat chat-end" key={m.id}>
                                <div className="chat-bubble bg-primary text-primary-content border-none rounded-2xl">
                                    {m.text}
                                </div>
                                <div className="chat-footer opacity-40 text-[10px] mt-1">
                                    {m.isRead ? "Seen" : "Delivered"} <time>{m.timestamp}</time>
                                </div>
                            </div>
                            :
                            <div className="chat chat-start" key={m.id}>
                                {/* <Avatar
                                    name={currentUser.name} isOnline={currentUser.isOnline} imageUrl={currentUser.imageUrl} size={8} /> */}
                                <div className="chat-image avatar">
                                    <div className="w-8 rounded-full">
                                        <img src={currentUser?.imageUrl} />
                                    </div>
                                </div>
                                <div className="chat-header opacity-50 text-xs mb-1 ml-1">
                                    {m.sender} <time>{m.timestamp}</time>
                                </div>
                                <div className="chat-bubble bg-base-200 text-base-content border-none rounded-2xl">
                                    {m.text}
                                </div>
                                <div className="chat-footer opacity-40 text-[10px] mt-1">{m.isRead ? "Seen" : "Delivered"}</div>
                            </div>

                        )
                    })
                }
                <div ref={scrollRef} />
            </div>

            {/* --- Android Style Input Field --- */}
            <div className="p-4 bg-base-100 flex items-center gap-2 pb-15">
                <div className="flex-1 flex items-center bg-base-200 rounded-full px-4 py-1">
                    <input
                        type="text"
                        placeholder="Text message"
                        className="input input-ghost w-full focus:bg-transparent focus:outline-none"
                    />
                </div>
                <button className="btn btn-primary btn-circle shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" /></svg>
                </button>
            </div>
        </div>
    );
}
export default MessageDetailScreen;