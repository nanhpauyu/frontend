import type { People, } from "../types";
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import MatchFoundNoti from "../components/MatchFoundNoti";
import { useOutletContext } from 'react-router-dom';


const DiscoveryScreen = () => {

    const { peopleList } = useOutletContext<{ peopleList: People[], matches: People[], profile: People }>();
    const [currentProfileIndex, setCurrentProfileIndex] = useState<number>(0);
    const [people, setPeople] = useState<People>(peopleList[currentProfileIndex]);

    useEffect(() => {
        setPeople(peopleList[currentProfileIndex]);
    }, [currentProfileIndex])

    const handleNext = () => {
        if (currentProfileIndex < 5) {
            setCurrentProfileIndex((index) => (index + 1));
        }
    }


    const handleLike = () => {
        if (people.like) {
            const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
            if (modal) {
                modal.showModal();
            }
            const duration = 5 * 1000; // 5 seconds
            const animationEnd = Date.now() + duration;

            const scalar = 2;
            const heart = confetti.shapeFromText({ text: '❤️', scalar });

            const defaults = {
                spread: 360,
                ticks: 60,
                gravity: 0,
                decay: 0.96,
                startVelocity: 20,
                shapes: [heart],
                scalar
            };

            const interval: any = setInterval(() => {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                // Fire the bursts
                confetti({
                    ...defaults,
                    particleCount: 30,
                    origin: { x: Math.random(), y: Math.random() - 0.2 }
                });

                confetti({
                    ...defaults,
                    particleCount: 5,
                    flat: true,
                    origin: { x: Math.random(), y: Math.random() - 0.2 }
                });

            }, 100);
        }
    }


    return (
        <>
            <div className="bg-base-100 min-h-screen pb-20 ">
                {/* 1. Hero Image Container */}
                {
                    (currentProfileIndex === 5) ? <p>Comeback Tomorrow</p> :
                        <>
                            <MatchFoundNoti id={people.id} />
                            <div className="relative h-[450px] w-full sticky top-0">
                                <img
                                    src={people.imageUrl}
                                    alt={people.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                {/* Name and Age over Image */}
                                <div className="absolute bottom-8 left-6 text-white">
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-3xl font-bold">{people.name}</h1>
                                        <span className="text-2xl opacity-90">24</span>
                                        {people.isOnline && (
                                            <div className="badge badge-success badge-sm border-none"></div>
                                        )}
                                    </div>
                                    <p className="flex items-center gap-1 text-sm opacity-80">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        {people.location}
                                    </p>
                                </div>
                            </div>

                            {/* 2. Content Card (Negative Margin to overlap image) */}
                            <div className="relative -mt-6 rounded-t-3xl bg-base-100 p-6 shadow-xl">

                                {/* --- Bio Section --- */}
                                <section className="mb-6">
                                    <h3 className="text-lg font-bold mb-2">ကျွန်တော့်အကြောင်း</h3>
                                    <p className="text-base-content/70 leading-relaxed">
                                        {people.intro}
                                    </p>
                                </section>

                                {/* --- Interests (Chips/Badges) --- */}
                                <section className="mb-6">
                                    <h3 className="text-lg font-bold mb-3">စိတ်ဝင်စားမှုများ</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['Music', 'Photography', 'Travel', 'Gaming'].map((tag) => (
                                            <div key={tag} className="badge badge-outline badge-lg py-4 px-4 text-sm">
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* --- Stats/Info Grid --- */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-base-200 p-4 rounded-2xl">
                                        <p className="text-xs opacity-50 uppercase">အရပ်</p>
                                        <p className="font-semibold">၅ ပေ ၈ လက်မ</p>
                                    </div>
                                    <div className="bg-base-200 p-4 rounded-2xl">
                                        <p className="text-xs opacity-50 uppercase">ပညာအရည်အချင်း</p>
                                        <p className="font-semibold">ဘွဲ့ရ</p>
                                    </div>
                                </div>


                                <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 px-6 pb-10">
                                    <button className="btn btn-circle btn-lg bg-base-100 shadow-xl border-none text-error hover:bg-error/10"
                                        onClick={handleNext}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                    <button className="btn btn-circle btn-lg btn-primary shadow-xl shadow-primary/30"
                                        onClick={handleLike}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                    </button>
                                </div>

                            </div>
                        </>}

            </div>
        </>
    );


    // return (
    //     <>
    //         <div className='h-dvh flex items-center pb-[100px]'>
    //             <div>
    //                 <main className="flex-1 px-4 relative mt-2 ">
    //                     {
    //                         (currentProfileIndex === 5) ? (
    //                             <>
    //                                 <p>Comeback Tomorrow ......</p>

    //                             </>
    //                         )
    //                             :
    //                             (
    //                                 <>
    //                                     <Card
    //                                         key={people.id}
    //                                         name={people.name}
    //                                         age={people.age}
    //                                         intro={people.intro}
    //                                         imageUrl={people.imageUrl}
    //                                         location={people.location} />
    //                                     <div className="absolute -bottom-6 left-0 right-0 flex justify-center items-center gap-6 z-30 font-padauk">
    //                                         <button
    //                                             onClick={handleLike}
    //                                             className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-110 transition">
    //                                             <Heart size={32} fill="currentColor" />
    //                                         </button>
    //                                         <button
    //                                             onClick={handleNext}
    //                                             className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-110 transition border border-white/10">
    //                                             <ArrowBigRight size={28} fill="currentColor" />
    //                                         </button>
    //                                     </div>
    //                                     <MatchFoundNoti id={people.id} />
    //                                 </>
    //                             )
    //                     }
    //                 </main>
    //             </div>
    //         </div>

    //     </>
    // )
}
export default DiscoveryScreen;