import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from "../../data/data";
import { countries } from "../../data/countries"
import { cities } from "../../data/cities";
import dummyProfile from "../../assets/dummyProfile.png"
import { useRef } from 'react';

const RegisterScreen = () => {
    if (isLoggedIn) {
        return <Navigate to="/discovery" replace />;
    }
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "", password: "", name: "",
        gender: "",
        dob: "", intro: "", location: "",
        heightFeet: 0, heightInches: 0, education: "",
        interests: [] as string[],
        minAge: 18, maxAge: 30
    });
    const nextStep = () => {
        setStep(s => s + 1);
    }
    const prevStep = () => setStep(s => s === 1 ? 1 : s - 1);

    const interestOptions = [
        { label: "Music" }, { label: "Gaming" }, { label: "Traveling" },
        { label: "Photography" }, { label: "Fitness" }, { label: "Cooking" },
        { label: "Movies" }, { label: "Dancing" }, { label: "Art" },
        { label: "Pets" }, { label: "Coffee" }, { label: "Reading" },
        { label: "Yoga" }, { label: "Hiking" }, { label: "Tech" },
        { label: "Wine" }, { label: "Fashion" }, { label: "Nature" },
        { label: "Sports" }, { label: "Gardening" } // The 20th item
    ];

    return (
        <>
            <div className="min-h-screen">
                <div className="px-6 pt-4">
                    <div className="w-full h-1  rounded-full">
                        <div
                            className="h-full bg-[#F1A1B1] transition-all duration-500"
                            style={{ width: `${(step / 5) * 100}%` }}
                        />
                    </div>
                </div>

                {step === 1 && <><StepOne data={formData} set={setFormData} nextStep={nextStep} prevStep={prevStep} /></>}
                {step === 2 && <><StepTwo data={formData} set={setFormData} nextStep={nextStep} prevStep={prevStep} /></>}
                {step === 3 && <><StepThree data={formData} set={setFormData} nextStep={nextStep} prevStep={prevStep} options={interestOptions} /> </>}
                {step === 4 && <><StepFour data={formData} set={setFormData} nextStep={nextStep} prevStep={prevStep} /></>}
                {step === 5 && <><StepFive data={formData} set={setFormData} prevStep={prevStep} finish={() => console.log(formData)} /></>}

            </div>
        </>
    )
}
export default RegisterScreen;

const NextAndPrev = ({ nextStep, prevStep, isDisable }: any) => {
    return (
        <>
            <div className="flex gap-3 mt-8 w-full">
                {/* Secondary Button */}
                <button onClick={prevStep}
                    className="btn flex-1 btn-block  border-none text-white h-14 rounded-2xl font-bold transition-transform active:scale-95 btn-error">
                    နောက်သို့
                </button>

                <button
                    onClick={nextStep}
                    disabled={isDisable}
                    className="btn flex-1 btn-block bg-[#2AB47D] border-none text-white h-14 rounded-2xl font-bold transition-transform active:scale-95">
                    ရှေ့သို့</button>

            </div>
        </>
    )
}

const StepOne = ({ data, set, nextStep, prevStep }: any) => {
    const isFormValid = data.name && data.email && data.password !== "default";
    return (
        < div className="p-8 space-y-6" >
            <h1 className="text-3xl font-bold">အသင်းဝင်မည်</h1>
            <div className="form-control">
                <input type="text" placeholder="နာမည်" className="input input-bordered rounded-2xl h-14"
                    onChange={e => set({ ...data, name: e.target.value })} 
                    defaultValue={data.name === "" ? "" : data.name}/>
            </div>
            <div className="form-control">
                <input type="email" placeholder="အီးမေးလ်လိပ်စာ" className="input input-bordered rounded-2xl h-14"
                    onChange={e => set({ ...data, email: e.target.value })} 
                    defaultValue={data.email === "" ?"": data.email}/>
            </div>
            <div className="form-control">
                <input type="password" placeholder="စကားဝှက်" className="input input-bordered rounded-2xl h-14"
                    onChange={e => set({ ...data, password: e.target.value })} 
                    defaultValue={data.password  === "" ?"": data.password}/>
            </div>
            <NextAndPrev nextStep={nextStep} prevStep={prevStep} isDisable={!isFormValid} />
        </div >

    )
}

const StepTwo = ({ data, set, nextStep, prevStep }: any) => {
    const isFormValid = data.dob && data.heightFeet && data.gender !== "default";
    // Helper to handle gender selection
    const handleGender = (gender: string) => {
        set({ ...data, gender: gender });
    };

    return (
        <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#F1A1B1]">သင့်အကြောင်း</h2>

            <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                    <label className="label-text mb-2 font-semibold">မွေးနေ့</label>
                    <input
                        type="date"
                        className="input input-bordered rounded-2xl focus:border-[#F1A1B1]"
                        onChange={e => set({ ...data, dob: e.target.value })}
                        defaultValue={data.dob !== "" && data.dob}
                    />
                </div>

                <div className="form-control">
                    <label className="label-text mb-2 font-semibold">အရပ်အမြင့်</label>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                            <input
                                type="number"
                                placeholder='0'
                                defaultValue={data.heightFeet !== 0 && data.heightFeet}
                                className="input input-bordered rounded-2xl w-full pr-7"
                                onChange={e => set({ ...data, heightFeet: e.target.value })}
                            />
                            <span className="absolute right-3 top-3 text-gray-400 text-xs font-bold">ft</span>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                placeholder='0'
                                defaultValue={data.heightInches === 0 ? "" : data.heightInches}
                                className="input input-bordered rounded-2xl w-full pr-7"
                                onChange={e => set({ ...data, heightInches: e.target.value })}
                            />
                            <span className="absolute right-3 top-3 text-gray-400 text-xs font-bold">in</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sex / Gender Section */}
            <div className="form-control">
                <label className="label-text mb-2 font-semibold text-gray-600">လိင်</label>
                <div className="flex gap-3">
                    {['အမျိုးသား', 'အမျိုးသမီး'].map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => handleGender(option)}
                            className={`flex-1 py-3 rounded-2xl font-bold border-2 transition-all active:scale-95 text-sm
                                ${data.gender === option
                                    ? "bg-[#F1A1B1] border-[#F1A1B1] text-white shadow-md shadow-pink-100"
                                    : "bg-white border-gray-100 text-gray-500"}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <select
                className="select select-bordered w-full rounded-2xl focus:border-[#F1A1B1]"
                onChange={e => set({ ...data, education: e.target.value })}
                defaultValue={data.education === "" ? "ပညာအရည်အချင်း" : data.education}
            >
                <option  disabled={true}>ပညာအရည်အချင်း</option>
                <option >အထက်တန်းကျောင်း</option>
                <option >ဘွဲ့ရ</option>
                <option >Master's / PhD ဘွဲ့ရ</option>
 
            </select>

            {/* Intro Section */}
            <textarea
                placeholder="ကျွန်တော့်အကြောင်းအတိုချုပ်..."
                className="textarea textarea-bordered w-full h-24 rounded-2xl focus:border-[#F1A1B1]"
                onChange={e => set({ ...data, intro: e.target.value })}
                defaultValue={data.intro === '' ? "": data.intro}
            />

            <NextAndPrev nextStep={nextStep} prevStep={prevStep} isDisable={!isFormValid}/>
        </div>
    );
};

const StepThree = ({ data, set, nextStep, prevStep, options }: any) => {
    const toggle = (label: string) => {
        const news = data.interests.includes(label)
            ? data.interests.filter((i: string) => i !== label)
            : [...data.interests, label];
        set({ ...data, interests: news });
    };

    return (
        <div className="p-6 flex flex-col h-full">
            <h2 className="text-2xl font-bold text-[#F1A1B1] mb-2">ဝါသနာနှင့် စိတ်ဝင်စားမှုများ</h2>

            {/* Grid Layout: 
          - grid-cols-3: 3 columns
          - gap-3: spacing between items
          - content-start: aligns grid to the top
      */}
            <div className="flex-1 grid grid-cols-4 gap-3 overflow-y-auto no-scrollbar pb-4 content-start">
                {options.map((opt: any) => {
                    const isSelected = data.interests.includes(opt.label);
                    return (
                        <button
                            key={opt.label}
                            onClick={() => toggle(opt.label)}
                            className={`
                aspect-square rounded-xl flex flex-col items-center justify-center p-0
                text-[11px] font-bold transition-all duration-200 active:scale-95 border-1 
                ${isSelected
                                    ? "bg-[#F1A1B1] border-[#F1A1B1] text-white shadow-md shadow-pink-100"
                                    : "bg-white border-gray-100 text-gray-500 hover:border-[#F9E3E4]"}
              `}
                        >
                            {/* Optional: Add an icon placeholder here if you have them */}
                            <span>{opt.label}</span>
                        </button>
                    );
                })}
            </div>

            <div className="mt-auto pt-4">
                <NextAndPrev nextStep={nextStep} prevStep={prevStep} />
            </div>
        </div>
    );
};


const StepFour = ({ data, set, nextStep, prevStep }: any) => {
    const isFormValid = data.location  !== "";
    const [country, setCountry] = useState<string>("")
    useEffect(() => {
        // If the country is not Myanmar, automatically set the location to that country
        if (country !== "မြန်မာ" && country !== "") {
            set((prev: any) => ({ ...prev, location: country }));
        }
    }, [country]);
    return (
        <div className="p-8 space-y-8 h-full">
            <h2 className="text-2xl font-bold text-[#F1A1B1]">ဦးစားပေးမှုများ</h2>

            {/* Minimum Age Slider */}
            <div>
                <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-600">အနိမ့်ဆုံးအသက်</span>
                    <span className="text-[#F1A1B1] font-bold">{data.minAge} နှစ် </span>
                </div>
                <input
                    type="range"
                    min="18"
                    max="100"
                    value={data.minAge}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        // Correct logic: Only update minAge, and ensure it's not higher than maxAge
                        if (val < data.maxAge) {
                            set({ ...data, minAge: val });
                        }
                    }}
                    className="range range-xs range-primary"
                    style={{ accentColor: '#F1A1B1' }}
                />
            </div>

            {/* Maximum Age Slider */}
            <div>
                <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-600">အမြင့်ဆုံးအသက်</span>
                    <span className="text-[#F1A1B1] font-bold">{data.maxAge} နှစ် </span>
                </div>
                <input
                    type="range"
                    min="18"
                    max="100"
                    value={data.maxAge}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        // Correct logic: Only update maxAge, and ensure it's not lower than minAge
                        if (val > data.minAge) {
                            set({ ...data, maxAge: val });
                        }
                    }}
                    className="range range-xs range-primary"
                    style={{ accentColor: '#F1A1B1' }}
                />
            </div>

            {/* Location Input */}
            <select defaultValue={data.location === "" ? "နိုင်ငံ ရွေးပါ" : data.location} className="select"
                onChange={e => setCountry(e.target.value)}
                >
                <option disabled={true}>နိုင်ငံ ရွေးပါ</option>
                {countries.map((c) => <option key={c.myanmar} >{c.myanmar}</option>)}
            </select>
            {country === "မြန်မာ" && <>
                <select defaultValue="မြို့ ရွေးပါ" className="select"
                    onChange={e => set({ ...data, location: e.target.value })}>
                    <option disabled={true}>မြို့ ရွေးပါ</option>
                    {cities.map((c) => <option key={c.myanmar} >{c.myanmar}</option>)}
                </select>
            </>
            }

            <div className="mt-auto pt-4">
                <NextAndPrev nextStep={nextStep} prevStep={prevStep} isDisable={!isFormValid}/>
            </div>
        </div>
    )
}

const StepFive = ({ data, set, prevStep, finish }: any) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                set({ ...data, profileImg: reader.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-8 space-y-8 h-full flex flex-col">            
            <div className="flex flex-col items-center py-4">
                <div className="relative">
                    <div className="avatar">
                        <div className="w-32 h-32 rounded-full ring ring-[#F1A1B1] ring-offset-base-100 ring-offset-2 overflow-hidden bg-gray-100">
                            <img 
                                src={dummyProfile} 
                                alt="My Profile" 
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Hidden Input */}
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden" 
                        accept="image/*"
                        onChange={handleFileChange}
                    />

                    {/* Styled Camera Button */}
                    <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="btn btn-circle bg-[#F1A1B1] hover:bg-[#e08e9e] btn-sm absolute bottom-0 right-0 shadow-lg border-2 border-white text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
                
                <h2 className="mt-4 text-xl font-bold text-gray-700">{data.name || "အမည်မသိ"}</h2>
            </div>

            {/* Spacer to push buttons to bottom */}
            <div className="flex-1" />

            <div className="flex gap-3 mt-8 w-full">

                {/* Secondary Button */}

                <button onClick={prevStep}

                    className="btn flex-1 btn-block  border-none text-white h-14 rounded-2xl font-bold transition-transform active:scale-95 btn-error">

                    နောက်သို့

                </button>



                <button

                    onClick={finish}

                    className="btn flex-1 btn-block bg-[#2AB47D] border-none text-white h-14 rounded-2xl font-bold transition-transform active:scale-95">

                    အသင်းဝင်မည်

                </button>



            </div>
        </div>
    );
};