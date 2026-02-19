import { Heart, Compass, ArrowBigRight } from 'lucide-react';
import type { CardProps } from '../types';



const Card = ({ name, age, intro, location, imageUrl }: CardProps) => {
    return (
        <>
            <div className="relative h-[580px] w-full rounded-[2.5rem] overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img
                    src={imageUrl}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <div className="flex items-center gap-2 mb-3">
                        <h2 className="text-3xl font-bold">{name}, {age}</h2>
                        <div className="bg-blue-500 p-0.5 rounded-full">
                            <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                        </div>
                    </div>

                    <p className="text-gray-200 text-sm leading-relaxed mb-4 max-w-[80%]">
                        {intro}
                    </p>

                    <p className=" text-gray-400 text-xs flex items-center gap-1">
                        <Compass size={12} /> {location}
                    </p>
                </div>
            </div>
        </>
    )
}
export default Card;