import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import DiscoveryScreen from './pages/DiscoveryScreen';
import MessagesScreen from './pages/MessagesScreen';
import ProfileScreen from './pages/ProfileScreen';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';
import type { People, PeopleList, Message } from './types';
import { burmesePeople, matchPeopleList, myProfile,  } from './data';
import MessageDetailScreen from './pages/MessageDetailScreen';



function App() {

  const [peopleList, setPeopleList] = useState<People[]>(burmesePeople.filter((user) => !user.match).slice(0, 5));
  const [matches, setMatches] = useState<People[]>(matchPeopleList)
  const [profile, setProfile] = useState<People>(myProfile)


  return (
    <>
      <BrowserRouter>
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative w-full max-w-md h-dvh  overflow-hidden flex flex-col shadow-2xl">
            <div className="flex-1 overflow-y-auto no-scrollbar ">
              <Routes>
                <Route path="/" element={<DiscoveryScreen peopleList={peopleList} />} />
                <Route path="/messages" element={<MessagesScreen peopleList={matches} />} />
                <Route path="/profile" element={<ProfileScreen user={profile}/>} />
                <Route path="/messages/:id" element={<MessageDetailScreen />} />
              </Routes>
            </div>
            <Navigation />
          </div>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
