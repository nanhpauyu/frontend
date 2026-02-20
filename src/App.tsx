import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import DiscoveryScreen from './pages/DiscoveryScreen';
import MessagesScreen from './pages/MessagesScreen';
import ProfileScreen from './pages/ProfileScreen';
import Navigation from './components/Navigation';
import { useState, } from 'react';
import type { People, } from './types';
import { burmesePeople, matchPeopleList, myProfile, } from './data/data';
import MessageDetailScreen from './pages/MessageDetailScreen';
import LandingScreen from './pages/LandingScreen';
import Login from './pages/Login';

import { isLoggedIn } from './data/data';
import RegisterScreen from './pages/registration/RegisterScreen';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingScreen />} />

          <Route element={<MobileLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegisterScreen />} />
          </Route>

          <Route element={<Auth showNav={true} />}>
            <Route path="/discovery" element={<DiscoveryScreen />} />
            <Route path="/message" element={<MessagesScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/message/:id" element={<MessageDetailScreen />} />
          </Route>

        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App


const Auth = ({ showNav = false }: { showNav?: boolean }) => {
  const [peopleList,] = useState<People[]>(burmesePeople.filter((user) => !user.match).slice(0, 5));
  const [matches,] = useState<People[]>(matchPeopleList)
  const [profile,] = useState<People>(myProfile)

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md min-h-screen  overflow-hidden flex flex-col shadow-2xl">
          <div className="flex-1 overflow-y-auto no-scrollbar ">
            <Outlet context={{ peopleList, matches, profile }} />
            {showNav && (
              <Navigation />
            )}
          </div>
        </div>
      </div >
    </>
  );
};

const MobileLayout = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md min-h-screen  overflow-hidden flex flex-col shadow-2xl">
          <div className="flex-1 overflow-y-auto no-scrollbar ">
            <Outlet />
          </div>
        </div>
      </div >
    </>
  );
}
