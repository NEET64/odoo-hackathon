import CrimeList from "@/components/CrimeList";
import CrimeSearch from "@/components/CrimeSearch";
import Map from "@/components/Map";

const Crimepage = () => {
  return (
    <div className="grid  md:grid-cols-3 h-full flex-1">
      <div className="bg-slate-800 h-full md:col-span-2 w-full p-2">
        <Map />
      </div>
      <div className="bg-slate-800 h-full w-full ">
        <CrimeSearch />
        <CrimeList />
      </div>
    </div>
  );
};

export default Crimepage;
