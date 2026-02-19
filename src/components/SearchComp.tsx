import { Search,  } from 'lucide-react';

const SearchComp = () => {
    return (
        <>
            <div className="px-5 mb-2">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search matches"
                        className="w-full  border-inherit rounded-2xl py-3 pl-12 pr-4 text-sm "
                    />
                </div>
            </div>
        </>
    )
}
export default SearchComp;