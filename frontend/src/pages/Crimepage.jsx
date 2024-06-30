import CrimeList from "@/components/CrimeList";
import CrimeSearch from "@/components/CrimeSearch";
import Map from "@/components/Map";
import { data } from "@/data";
import { useState } from "react";

const Crimepage = () => {
  const [crimes, setCrimes] = useState(data);
  const [coordinates, setCoordinates] = useState([]);

  return (
    <div className="grid  md:grid-cols-3 h-full flex-1">
      <div className="bg-slate-800 h-96 md:h-full md:col-span-2 w-full p-2">
        <Map coordinates={coordinates} />
      </div>
      <div className="bg-slate-800 md:h-full w-full ">
        <CrimeSearch setCrimes={setCrimes} />
        <CrimeList crimes={crimes} setCord={setCoordinates} />
      </div>
    </div>
  );
};

export default Crimepage;
