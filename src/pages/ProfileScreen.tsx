import { useState } from "react";
import type { People } from "../types";

const ProfileScreen = ({user}:{user:People}) => {
  const [isDiscoveryOn, setIsDiscoveryOn] = useState(true);
  const [distance, setDistance] = useState(25);

  return (
    <div className="min-h-screen bg-base-200 pb-10 pt-6">


      {/* 2. Profile Photo Edit Area */}
      <div className="flex flex-col items-center bg-base-100 py-8 mb-4">
        <div className="relative">
          <div className="avatar">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.imageUrl} alt="My Profile" />
            </div>
          </div>
          <button className="btn btn-circle btn-primary btn-sm absolute bottom-0 right-0 shadow-lg border-white">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
        </div>
        <h2 className="mt-4 text-xl font-bold">{user.name}, 24</h2>
      </div>

      {/* 3. Settings Sections */}
      <div className="px-4 space-y-4">
        
        {/* Account Settings Group */}
        <section>
          <p className="text-xs font-bold opacity-50 ml-2 mb-2 uppercase">Account Settings</p>
          <div className="bg-base-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 flex items-center justify-between border-b border-base-200">
              <span className="font-medium">Phone Number</span>
              <span className="opacity-50">09 7********</span>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="font-medium">Email</span>
              <span className="opacity-50">user@email.com</span>
            </div>
          </div>
        </section>

        {/* Discovery Settings Group */}
        <section>
          <p className="text-xs font-bold opacity-50 ml-2 mb-2 uppercase">Discovery Settings</p>
          <div className="bg-base-100 rounded-2xl p-4 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Discovery</p>
                <p className="text-xs opacity-50">Show me to other people</p>
              </div>
              <input 
                type="checkbox" 
                className="toggle toggle-primary" 
                checked={isDiscoveryOn} 
                onChange={() => setIsDiscoveryOn(!isDiscoveryOn)} 
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Maximum Distance</span>
                <span className="text-primary font-bold">{distance} km</span>
              </div>
              <input 
                type="range" min="0" max="100" 
                value={distance} 
                onChange={(e) => setDistance(parseInt(e.target.value))}
                className="range range-primary range-xs" 
              />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button className="btn btn-block btn-outline border-base-300 bg-base-100 rounded-2xl">
            Logout
          </button>
          <button className="btn btn-block btn-ghost text-error">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
};
export default ProfileScreen;