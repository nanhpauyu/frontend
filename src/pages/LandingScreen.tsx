import { NavLink } from 'react-router-dom';


const LandingScreen = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#F1A1B1] overflow-hidden flex flex-col">

      {/* 1. Masonry Photo Grid Area */}

      <div className="relative flex-1 w-full pt-12 px-2 overflow-hidden bg-[#F9E3E4]/30">
        {/* Heart Logo Overlay */}
        <div className="absolute top-24 right-16 z-20 text-white opacity-90">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-3 gap-3">
          {/* Column 1 */}
          <div className="space-y-3 -mt-10">
            <div className="h-40 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
            <div className="h-56 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-3 mt-4">
            <div className="h-52 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
            <div className="h-64 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-3 -mt-4">
            <div className="h-48 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
            <div className="h-44 bg-white/20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-sm">
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80" className="object-cover h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Text and Button Area */}
      <div className="p-8 pb-12 bg-[#F1A1B1] space-y-6">
        <h1 className="text-5xl font-bold text-white leading-[1.1]">
          Find your <br /> partner in life
        </h1>

        <p className="text-white/90 text-lg leading-relaxed font-medium pr-4">
          We created to bring together amazing singles who want to find love, laughter and happily ever after!
        </p>

        <div className="pt-4 space-y-4">
          {/* Updated Button Text Color to match new primary theme */}
          <NavLink 
          to='/register'
          className="btn btn-block bg-white hover:bg-white/90 text-[#F1A1B1] border-none rounded-2xl h-16 text-lg font-bold shadow-lg capitalize transition-transform active:scale-95">
            Join now
          </NavLink>
          {/* <button className="btn btn-block bg-white hover:bg-white/90 text-[#F1A1B1] border-none rounded-2xl h-16 text-lg font-bold shadow-lg capitalize transition-transform active:scale-95">
            Join now
          </button> */}

          <p className="text-center text-white font-medium">
            Already have account?
            <NavLink
              to="/login"
              className="font-bold hover:underline"
            >Log in</NavLink>
            {/* <button className="font-bold hover:underline"></button> */}
          </p>
        </div>
      </div>

    </div>
  );
}
export default LandingScreen;