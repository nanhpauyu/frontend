import { MessageSquare, HomeIcon, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';


const Navigation = ({ }) => {
    return (
        <>
            <div className="dock dock-sm ">
                <NavLink
                    to="/discovery"
                    className={({ isActive }) => isActive ? 'dock-active text-pink-500' : 'text-gray-500'}
                >
                    <HomeIcon size={30} />
                </NavLink>

                <NavLink
                    to="/message"
                    className={({ isActive }) => isActive ? 'dock-active text-pink-500' : 'text-gray-500'}
                >
                    <div className="relative">
                        <MessageSquare size={30} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full" />
                    </div>
                </NavLink>

                <NavLink
                    to="/profile"
                    className={({ isActive }) => isActive ? 'dock-active text-pink-500' : 'text-gray-500'}
                >
                    <User size={30} />
                </NavLink>
            </div>
        </>
    );
};

export default Navigation;