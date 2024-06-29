const CrimeCard = ({ crime, setCoordinates }) => {
  return (
    <div className="border-2 cursor-pointer rounded-lg p-4 flex flex-col justify-between m-2 hover:bg-slate-700 transition-all duration-300" onClick={() => setCoordinates([crime.coordinates.longitude, crime.coordinates.latitude])}>
      <h1><span className="text-slate-500">Type of Crime : </span>{crime.typeOfCrime}</h1>
      <p><span className="text-slate-500">Location : </span>{crime.location}</p>
      <p className="pt-2">{crime.description}</p>
    </div>
  );
};

export default CrimeCard;
