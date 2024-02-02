import AdsCard from "./AdsCard";
import SearchBar from "./SearchBar";

export default function Sidebar() {
    return (
        <aside className="hidden md:block md:w-1/4 md:pl-5">
            <div className="pt-5">
                <SearchBar />
                <AdsCard />
                <AdsCard />
                <AdsCard />
            </div>
        </aside>
    )
}