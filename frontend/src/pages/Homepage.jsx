import CrimeCard from "@/components/CrimeCard";
import Globe from "@/components/Globe";
import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Homepage = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(position);
  });

  return (
    <div className="bg-slate-800 flex flex-col justify-center items-center ">
      <Globe />
      <Link to="/crime">
        <Button>
          Search Crime <ArrowRight />
        </Button>
      </Link>
      {/* <div className="relative w-full h-96 p-2">
        <Map />
      </div>
      {data.map((item, index) => (
        // <div key={index}>{item.typeOfCrime}</div>
        <CrimeCard key={index} crime={item} />
      ))} */}
    </div>
  );
};

export default Homepage;
