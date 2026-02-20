import { useState } from "react";

const expectations = [
  { id: 1, label: "Long term relationship", size: "w-32 h-32", offset: "mt-4" },
  { id: 2, label: "Start a family", size: "w-36 h-36", offset: "-mt-8" },
  { id: 3, label: "Romance", size: "w-24 h-24", offset: "mt-12" },
  { id: 4, label: "Active partner", size: "w-28 h-28", offset: "mt-0" },
  { id: 5, label: "Friends with benefit", size: "w-24 h-24", offset: "-mt-4" },
  { id: 6, label: "Vacation", size: "w-20 h-20", offset: "mt-6" },
  { id: 7, label: "Chat", size: "w-16 h-16", offset: "-mt-10" },
  { id: 8, label: "Casual dating", size: "w-24 h-24", offset: "mt-2" },
  { id: 9, label: "Friends first", size: "w-24 h-24", offset: "mt-4" },
];

const ExpectationsScreen = () => {
  const [selected, setSelected] = useState<number[]>([1, 2, 4]);

  const toggleSelection = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col p-6 overflow-hidden">
      {/* 1. Header & Progress */}
      <div className="flex justify-between items-center mb-4">
        <button className="btn btn-ghost btn-circle btn-sm">❮</button>
        <div className="w-1/2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-[60%] h-full bg-[#2AB47D] rounded-full transition-all duration-500" />
        </div>
        <button className="text-gray-400 font-bold text-sm">Skip</button>
      </div>

      {/* 2. Title */}
      <h1 className="text-3xl font-bold text-center mt-6 mb-10 text-gray-800 leading-tight">
        What are your <br /> expectations?
      </h1>

      {/* 3. Bubble Grid (The "Floating" Layout) */}
      <div className="flex-1 flex flex-wrap justify-center items-center gap-3 content-center">
        {expectations.map((item) => {
          const isSelected = selected.includes(item.id);
          return (
            <button
              key={item.id}
              onClick={() => toggleSelection(item.id)}
              className={`
                ${item.size} ${item.offset}
                rounded-full flex items-center justify-center text-center p-4 
                text-[11px] font-bold leading-tight shadow-sm
                transition-all duration-300 ease-out
                active:scale-90 touch-none
                ${isSelected 
                  ? "bg-[#2AB47D] text-white shadow-lg shadow-green-200 scale-105" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* 4. Action Button */}
      <div className="mt-auto pt-6">
        <button className="btn btn-block bg-[#2AB47D] hover:bg-[#239b6b] border-none text-white h-14 rounded-2xl text-lg font-bold shadow-md active:scale-[0.98] transition-transform">
          Continue
        </button>
      </div>
    </div>
  );
};
export default ExpectationsScreen